---
layout: post
title: "Bouncing balls"
date: 2015-03-03 09:53:23
author: SirePi
tags: [breakout, tutorial]
published: true
lesson: breakout#2
images: breakout-part-2
---
Time for the second part of the Breakout tutorial. Unfortunately it took longer than expected due to some issues I found while trying to realize the correct movements of the Ball; now it should be sufficiently similar to the original that I feel confident to publish this second part :D

After part 1 we left our Ball bouncing higher and higher on the Paddle, without end; the first thing we will do today is to create a playing field to constrain the Ball's movements.
<!--more-->

Add a <xm>New &#9654; GameObject</xm> and call it "<xn>GameArea</xn>"; add a <xm>New &#9654; Graphics &#9654; SpriteRenderer</xm> and, like we did with the <xn>Paddle</xn>, set its properties as follows:

* set <xp>Rect</xp> to <xc>[-200, -300, 400, 600]</xc>
* set <xp>SharedMaterial</xp> to <xc>Default\Material\SolidWhite</xc> (grab it from the <xd>Project View</xd>)
* the <xp>ColorTint</xp> can be left white (RGB <xc>255, 255, 255</xc>)

Next, we need to add a <xm>New &#9654; Physics &#9654; RigidBody</xm> so that it will be able to keep our <xn>Ball</xn> inside it.  
To do it, we will create an upside-down 'U'-shaped <xp>RigidBody</xp> around the sprite; this way, the white area becomes the play area and the "blackness" around it, is an impenetrable wall. So go to the RigidBody Editor and remove the circle: since <xp>RigidBodies</xp>' <xp>Shapes</xp> cannot be concave, we will have to add 3 rectangles around the perimeter, as displayed in the picture below. Again, it's not important to place the vertices in the exact places at start; what's important is that the left, top and right sides are covered.

{% include lightbox.html img='1' %}

If you want to check, I used the following vertices:

* <xc>[-200, 300], [-210, 300], [-210, -310], [-200, -310]</xc>
* <xc>[-200, -310], [200, -310], [200, -300], [-200, -200]</xc>
* <xc>[200, -310], [200, 300], [210, 310], [210, -310] </xc>

Finally, set <xp>AngularDamping</xp>, <xp>Friction</xp> and <xp>LinearDamping</xp> to <xc>0</xc>, <xp>Restitution</xp> to <xc>1</xc> and the <xp>BodyType</xp> to <xc>Static</xc>, click <xd>Play</xd>, and we are back to our Ball bouncing, with the difference that now, now sooner or later, it will hit the top of the <xn>GameArea</xn> and will bounce back to us.

For the next point, we will add some manner of control to our Paddle; so let's go back to your IDE and add a new class, calling it "<xn>InputController</xn>".  
We have two choices to respond to key presses: one is to attach to <xp>OpenTK</xp>'s events, the other is to test the keys we are interested in during the update phase; for this tutorial, we will use the latter.
Make the newly generated class derive from <xp>Component</xp> and explicitly implement <xp>ICmpUpdatable</xp>; this time though, instead of accessing our Paddle GameObject by name, as we did for the Ball's collision handler, we will add a reference to the <xn>Paddle </xn>'s <xp>GameObject</xp> directly inside the code: this is to avoid to have to call a <xp>Scene.FindGameObject</xp> function every time we need to move the Paddle. For the Ball's collision management it was acceptable to test the name of the GameObject that triggered the collision, since in the event's handler arguments we were already being passed the GameObject colliding itself.  
In addition to the <xn>Paddle</xn> <xp>GameObject</xp>, we will also need to define some other properties: another <xp>GameObject</xp>, this time for holding a reference to the <xn>Ball</xn>, and two <xp>floats</xp>: one for the <xn>PaddleSpeed</xn>, and the other for the <xn> InitialSpeed</xn> of our Ball (you will see why later).

Now we have to edit the <xp>ICmpUpdatable.OnUpdate</xp> method in order to perform the following:

* pressing the <xc>Left</xc> arrow key, we will move the <xn>Paddle</xn> to the left
* pressing the <xc>Right</xc> arrow key, we will move the <xn>Paddle</xn> to the right (duh)
* pressing <xc>Space</xc> will launch the <xn>Ball</xn> and start the game

The last point is necessary because from now on the Ball will not be moving at the start but wait the player's command; in addition, the Ball will not be subject anymore to gravity but continue moving on its current direction until something is hit.  
The function to test if a key is currently pressed is <xc>DualityApp.Keyboard.KeyPressed(OpenTK.Input.Key)</xc>

The full source code of <xn>InputController</xn> is as follows:

{% gist SirePi/4a20477254b4790e4e28 inputcontroller_01.cs %}

In the code, you can notice the following:

* I used a <xn>secondsPassed</xn> variable which is set to <xc>Duality.Time.LastDelta / 1000</xc>: this is used in order to move the Paddle taking into account the different times taken to manage each single frame (update + draw); the movement is then calculated based on the time past since the last update. Frames might take longer or shorter times but in the end our Paddle will move always by <xp>PaddleSpeed</xp> units/second.
* While checking if <xc>Space</xc> was pressed, I also added the condition that <xn> LinearVelocity</xn> is equal to <xc>0.0</xc>: this is to ensure that the Ball will start moving only if it is not currently moving (i.e. at the beginning of the game)

Once compiled, we need to add our <xm>New &#9654; Breakout &#9654; InputController</xm> to the Scene. For convenience, I tend to add "general" components to the <xn>Camera</xn>, but that's only my style; nothing stops
you from creating a new GameObject to hold this component.  
After adding the new component somewhere in the Scene, we need to link the <xn> Paddle</xn> and <xn>Ball</xn> GameObjects by assigning them to the InputController using the editor (just drag the Paddle and Ball GameObjects from the Scene View to the InputController's Object Inspector). Set the <xp>PaddleSpeed</xp> and <xp>BallInitialSpeed</xp> to values like <xc>400.0</xc> (wich means the Paddle will be able to move from one end of the GameArea to the other in 1 second) and <xc>5.0</xc>.  
Lastly, select the Ball's <xp>RigidBody</xp> and check <xp>IgnoreGravity</xp>; click <xd>Play</xd> and finally we start to see some more interaction with the player: the <xn> Ball</xn> will be in the middle of the field, and as soon as you press <xc>Space</xc>, it will start moving towards the bottom. Using the <xc>Left</xc> and <xc>Right</xc> keys will make the <xn>Paddle</xn> move in the desired direction.

This is all good, until you click <xd>Play</xd> and notice two things:

1. the <xn>Ball</xn> is always bouncing perfectly vertical and
2. if you forget to catch the Ball, it goes by and gets lost somewhere in the depths of the world

So the next things to do are: first, to have the Ball change its trajectory depending on where it hit the Paddle; to do this we will have to alter directly the Ball's <xp>RigidBody</xp>'s <xp>LinearVelocity</xp> vector instead of relying on the usual physics mechanics.

I wanted to have the ball leave the Paddle with an angle of +/- 45 degrees, centered on y+ axis, depending on the position of the <xn>Ball</xn> relative to the center of the <xn>Paddle</xn>. See the code below for implementation and description.  
Second, we need to make it so that if the <xn>Ball</xn> goes past our <xn>Paddle</xn>, it should be put back at the starting position, ready to be launched again. For this we need to make our <xp>Ball</xp> component implement <xp>ICmpUpdatable.OnUpdate</xp> in order to test if its <xp>Transform.Pos.Y</xp> coordinate is enough to be considered out of the GameArea. Since we know already where
this limit is set (the Paddle's center sits at Y = 300, and it's 20 pixels tall), we can just test the coordinate against a hardcoded
value (<xc>310</xc> in our case).

{% gist SirePi/4a20477254b4790e4e28 ball_03.cs %}

As you can notice, <xp>PaddleImpulse</xp> now needs to be a <xc>1.XX</xc> value, since we are not applying a impuse to the <xn>Ball</xn> upon contact, but we are affecting directly the velocity vector.  
For the last time, click <xd>Play</xd> and enjoy playing around!

This concludes part 2 of the Breakout tutorial. The final part should be ready (for real this time) in a few days and will introduce bricks, end game conditions and scoring.