---
layout: post
title: "Hurt me plenty"
date: 2015-03-03 11:44:12
author: SirePi
tags: [duality, tutorial]
published: true
lesson: breakout#3
images: breakout-part-3
---
Finally we are ready for the third <del>and final</del> part of the Breakout tutorial series.

As I said at the end of the last part, this time we will complete the tutorial by introducing <xn>Bricks</xn>, scoring and end game conditions, so let's start with Bricks.
<!--more-->

Add a <xm>New &#9654; GameObject</xm>,call it "<xn>Brick</xn>" and, once again, add a <xm>New &#9654; Graphics &#9654; SpriteRenderer</xm>; set its properties as follows:

* set <xp>Rect</xp> to <xc>[-20, -10, 40, 20]</xc>
* set <xp>SharedMaterial</xp> to <xc>Default\Material\SolidWhite</xc> (from <xd>Project View</xd>)

Add a <xm>New &#9654; Physics &#9654; RigidBody</xm>, remove the default collision circle and replace it with a rectangle whose vertices coincide with those of the SpriteRenderer (so you will need <xc>[-20, -10]</xc>, <xc>[20, -10]</xc>, <xc>[20, 10]</xc> and<xc>[-20, 10]</xc>);  
set <xp>AngularDamping</xp>, <xp>LinearDamping</xp>, <xp>Friction</xp> to <xc>0.0</xc> and <xp>Restitution</xp> to <xc>1.0</xc>, and finally set its <xp>BodyType</xp> to <xc>Static</xc>.

Now, we will want our Bricks to have a different durability from one another, and in this case we will also need a way to determine how much durability a single Brick has left; so let's head back to the IDE and create a new <xn>Brick</xn> class, deriving, as usual, from <xp>Component</xp> and fill in the code as follows:

{% gist SirePi/4a20477254b4790e4e28 brick_01.cs %}

You will notice something different from usual: this time, instead of having a public auto-property with get and set methods, I explicitly created the private backing field <xc>_hitPoints</xc>; this is due to the fact that we want
the <xn>Brick</xn> to change its color (from red to black) depending on the remaining <xp>HitPoints</xp>.  
In addition, the backing field was decorated with the <xc>[NonSerialized]</xc> attribute, due to the fact that we won't be saving the Bricks inside our Scene directly, but rather we will implement also a generation mechanism
to do the hard work for us.

<explain>Setting a field as [DontSerialize] is basically telling the engine that there is no need to save the information contained in the field during the serialization process, which happens when you save your GameObject or Resource. This can be useful when you are dealing with fields that contain volatile data (i.e. data that you don't mind losing every time, or that might be even dangerous to keep stored) and that you are sure will be re-initialized
correctly when required.</explain>

Lastly, I added a <xc>bool Hit()</xc> method, which will be called every time the <xn>Ball</xn> hits a <xn>Brick</xn>, in order to decrease the Brick's remaining <xp>HitPoints</xp> and, eventually, removing it from the <xn>Scene</xn> altogether; the
method returns true if the <xn>Brick</xn> was destroyed, false otherwise (we will use this information for scoring).

Add the <xm>New &#9654; Breakout &#9654; Brick</xm> component to our <xn>Brick</xn> GameObject and then <xd>drag</xd> the Brick GameObject and <xd>drop</xd> it inside the <xd>Project View</xd>.  
Congratulations! You just created a <xn>Prefab</xn>!

<explain>Prefab is short for "prefabricated"; a Prefab resource can be considered as a template that we can use to generate an arbitrary number of GameObjects, and that all these GameObjects will contain exactly the same Components and properties. Each object created this way will have the same name as the Prefab.</explain>

Once we have our Prefab, you can safely delete the <xn>Brick</xn> GameObject from the <xn>Scene</xn>.. we will make them at run time by ourselves. To do this, we will need a specialized Component, which we'll call "<xn>GameManager</xn>".

This <xn>GameManager</xn> will be in charge of the following:

* generate the game field by instantiating Bricks and placing them at the right coordinates,
* take care of calculating the score of the player
* take care of resetting the <xn>Ball</xn> in case it goes out of bounds OR a new game is started (this will mean that our Ball won't do that by itself anymore)
* manage the lives left and, once they are gone, stop the game

For the first point, I will use a hardcoded approach, based on the fact that we know how much space there is around the game area and where we can put our Bricks. A good exercise would be to implement a new method which would generate the levels by selecting a template (could be an array where each index is a subsequent level) written using some kind of convention
that defines the place and durability of each brick.  
The second point will be implemented in conjuction with the <xn>Ball</xn>-<xn>Brick</xn> collision logic: every time a Brick is hit, we will add 1 point to the player's current score; 5 points if the brick is destroyed.<br>The third and fourth points will be in fact managed by the same method, as you will see later, since a Ball going out of bounds is directly related to the amount of lives left for the player.

{% gist SirePi/4a20477254b4790e4e28 gamemanager_01.cs %}

Again, some things you will (or should) notice in the code:

* Once again I use <xc>[NonSerialized]</xc> private fields to hold the score and lives; as I explained before, there is no need to store the score inside the game's Resources and, even if you were to implement a Save/Load mechanism to keep on playing a game from an arbitrary point, it would be better to save the current information inside the save file itself without cluttering the scene.
* You might ask what is <xp>BrickPrefab</xp> and why do we need it: a <xc>ContentRef&lt;T&gt;</xc> is basically a link to a dynamically-loaded Rresource - whatever its type (defined, you guessed right, by T) and, in our case, it is needed in order to tell our component which one is the correct Prefab that should be instantiated as a "Brick". Just drag the Brick Prefab from the <xd>Project View</xd> and drop it in the corresponding cell in the editor.
* to remove the connection between a GameObject and the Prefab it was based on we use <xc>BreakPrefabLink()</xc>; I guess there is no harm in keeping it, as long as you don't alter the Prefab using <xp>GameObject.PrefabLink</xp> methods. I just prefer to stay safe :) and also it keeps the game environment clean in my mind.
* I always use <xp>this.GameObj.ParentScene</xp> to determine which <xn>Scene</xn> a new GameObject should be added to because, unless <xp>Scene.Current</xp>, it lets you work with Components in Scenes that are not the currently active one; for example, you might need to generate a level in one Scene, while currently you are showing another Scene as a loading
screen. Again, it's just what I feel is best.. I might be wrong :)

Right, so now that we have our level generation code sorted out, we need a way to trigger it. To this end, we will modify our <xn>InputController</xn> so that, when <xc>Enter</xc> is pressed and there are no Bricks in the Scene, we will reset the Ball to its starting position, and lay out a new level to play in.

{% gist SirePi/4a20477254b4790e4e28 inputcontroller_02.cs %}

As you can see, we added a property to reference our <xn>GameManager</xn> object, and the new condition to trigger the level generation logic; I have added a <xc>Scene.FindGameObject()</xc> call in order to verify that there are no GameObjects called "<xn>Brick</xn>" in the Scene before effectively preparing a new level.

Finally, we can now complete our <xn>Ball</xn> class by adding the Ball-Brick collision code; in order to use the code we wrote for the GameManager, we will have to add a reference to it inside our Ball class as well.

{% gist SirePi/4a20477254b4790e4e28 ball_04.cs %}

All right, that was long!  
Compile your project and, if everything went fine, you should be able to add your <xm>New &#9654; Breakout &#9654; GameController</xm> to the Scene and link it everywhere it is needed (the <xn>Ball</xn>, and the <xn>InputController</xn>).  
Go on, try to <xd>Play</xd> around for a while :)

{% include lightbox.html img='1' %}

I didn't expect for this part to be so long.. I will stop here and finish with the scoring and general UI concepts next time.

See ya!