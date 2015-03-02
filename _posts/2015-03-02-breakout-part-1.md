---
layout: post
title: "Breakout - part 1"
date: 2015-03-02 13:52:58
categories: breakout, tutorial
published: true
images: breakout-part-1
lbid: lbx
---
All right, this is my first tutorial series, so be nice :D

In this tutorial I will try to develop al simple clone of Breakout using <a title="" target="_blank" href="http://duality.fetzenet.de">Duality</a>.
Being a quite simple game concept, it shouldn't be too difficult to implement, at least at a basic level.

<!--more-->

Despite this being a basic tutorial, I will assume the following:

* you have already seen Duality and Dualitor (the Duality Editor)
* you can navigate your way around them
* you know how to add a GameObject or a Component
* you know the basics of C# and of coding

For this tutorial, no extra resources are needed other than what is already present inside Duality.

But first things first, a quick and extremely simplified overview of Breakout: the goal of the game is to break a wall of bricks using a ball, while steering a paddle around to stop the ball from leaving the game area. The ball moves using a constant motion and can bounce on the bricks, the walls of the game area, and the paddle. Whenever a brick is hit by the ball, it gets damaged and when its "health" is depleted, it is removed from the game; when all the bricks have been removed, the level is clear and the game moves to the next one. If the ball goes out of the game area, the players loses one life and a new ball is put into play. When all lives are gone, the game is over.

So let's start and see where it takes us; fire up Dualitor and create a new project called "Breakout": you will see something like this (results may vary, depending on your version)

{% include lightbox.html img='1' %}

The first thing we need for our game, is the ball.

Add a <xm>New &#9654; GameObject</xm> to the Scene, and call it "<xn>Ball</xn>"; add a <xm>New &#9654; Graphics &#9654; SpriteRenderer</xm> to our <xn>Ball</xn>: by default it will appear as the Duality logo, which is a good enough ball for our purposes.. just a little too big; so change the new <xp>SpriteRenderer.Rect</xp> to <xc>[-10, -10, 20, 20]</xc>.

Finally, add a <xm>New &#9654; Physics &#9654; RigidBody</xm> component (we will use it to manage collisions and the general movements to the <xn>Ball</xn>).

So click <xd>Play</xd> and see what happens: our newly created <xn>Ball</xn> falls under the effects of the gravity and it soons disappears from the screen. Click <xd>Stop</xd> and it will be back to its starting position.

{% include lightbox.html img='2' %}

The next thing to do, is to fix the <xp>RigidBody</xp> so that it closely resembles our ball.  

Switch the view to the <xd>RigidBody Editor</xd> using the combobox over the <xd>Scene Editor</xd>: you will notice that our tiny ball's <xp>RigidBody</xp> is huge compared to it, so select it and change its <xp>Radius</xp> to <xc>10</xc>.
<table>
<tr>
<td>{% include lightbox.html img='3' %}</td>
<td>{% include lightbox.html img='4' %}</td>
</tr>
</table>
Finally, going back to the <xd>Scene Editor</xd>, change the <xp>RigidBody</xp> parameters so that <xp>AngularDamping</xp>, <xp>LinearDamping</xp> and <xp>Friction</xp> are set to <xc>0</xc>, and <xp>Restitution</xp>
is set to <xc>1</xc>. This will make so that our <xn>Ball</xn> will never lose speed due to collisions or friction, but keep on moving.

At this point, we still only have our falling ball, which is quite amusing to see for the first couple times, but gets boring quite quickly, so let's add a shiny paddle.

Add both a <xm>New &#9654; GameObject</xm> to the Scene and call it "<xn>Paddle</xn>", and a <xm>New &#9654; Graphics &#9654; SpriteRenderer</xm> to the newly created GameObject.  
Now, edit the <xp>SpriteRenderer</xp> as follows:

* set <xp>Rect</xp> to <xc>[-50, -10, 100, 20]</xc>
* set <xp>SharedMaterial</xp> to <xc>Default\Material\SolidWhite</xc> (grab it from the <xd>Project View</xd>)
* set <xp>ColorTint</xp> to a nice orange color (RGB <xc>255, 150, 0</xc>)

.. and voil&#224;! we have our <xn>Paddle</xn>! now move it to the bottom by setting its <xp>Transform.Pos</xp> Y coordinate to <xc>300</xc>.

Again, add a <xm>New &#9654; Physics &#9654; RigidBody</xm> Component and switch to the <xd>RigidBody Editor</xd> view. Unfortunately in this case our paddle is not a circle, so remove the current shape and add a new polygon; being a rectangle, we will need 4 vertices (left click to add a vertex, right click to stop). It's not important to place them exactly on the <xn>Paddle</xn>'s vertices, you can always fix the coordinates by editing them directly in
the <xd>Object Inspector</xd>. What's important is that they are at the right coordinates (see the picture).

{% include lightbox.html img="5" title="last one" %}

We are almost done.. now go back to the <xd>Scene Editor</xd>, select the <xn>Paddle</xn> and, again, set its <xp>RigidBody</xp>'s parameters as we did before (<xp>AngularDamping</xp>, <xp>LinearDamping</xp>, <xp>Friction</xp> to <xc>0</xc>, <xp>Restitution</xp> to <xc>1</xc>) and, this time, also set the <xp>BodyType</xp> to <xc>Static</xc>: this will prevent that collisions with
the ball move our paddle around.

One more time, press <xd>Play</xd> and you will see our xn>Ball</span> happily bouncing on the <xn>Paddle</xn>, never slowing down and always going back to the same height.

One thing that I forgot to mention, is that in Breakout each time the paddle hits the ball, this would make the ball go a little faster, making more difficult to catch it the next time it would come down. To do this, we would need to have a Restitution higher than 1 (i.e. the RigidBody will get back more energy than what it had during collision) but since this is not possible to do with the editor, we will have to get our hands dirty with some coding and, in this particular case, we will make a Component in charge
of managing the collisions of the Ball with the other actors in the game.

Open the Source Code by clicking on the second button of the toolbar; once Visual Studio (or your IDE of choice) is started, rename class "<xn>YourCustomComponentType</xn>" to "<xn>BallCollider</xn>". In order for our new Component to know when the Ball hit something it must implement interface <xp>ICmpCollisionListener</xp>, so add it to the class declaration and choose to implement it explicitly by right clicking the interface name in the code. This will add 3 new methods to our class: <xp> ICmpCollisionListener.OnCollisionBegin</xp>, <xp>ICmpCollisionListener.OnCollisionEnd</xp> and <xp>ICmpCollisionListener.OnCollisionSolve</xp>; for our goal, we are interested only in <xp>OnCollisionSolve</xp>.

What we want to do is to verify if the Ball hits our Paddle and, in this case, give it a little extra push to make it go faster than what it was before. We will accomplish this by using <xc>ApplyLocalImpulse(-Vector2.UnitY)</xc> to the Ball's <xp>RigidBody</xp> (you might need to add OpenTK to the using list for this) Why -Vector2.UnitY? Because Y
coordinates increase going down; since we want the ball to fly further from the paddle, we apply a negative Y force to it, so that it will be thrown away from the paddle.

Your code should look like this:
{% gist SirePi/4a20477254b4790e4e28 ball_01.cs %}

Compile and, if everything went well, you will now be able to add the <xm>New &#9654; Breakout &#9654; BallCollider</xm> component to your ball. Do it, then press play, and admire the ball as it flies away after hitting the paddle.. maybe a little too quickly. In order to make it easier for the player, we have to somehow apply a smaller force to the ball after it hit the paddle. Go back to the code and change the <xc>ApplyLocalImpulse</xc> parameter to <xc>(-Vector2.UnitY * PaddleImpulse)</xc>. What is PaddleImpulse? It's a new float property that you have to add to the class and that will let you calibrate on the fly the strength of the impulse applied to the ball.

Again compile, and go back to the editor: you should already see the new property in the <xp>BallCollider</xp>'s <xd>Object Inspector</xd> view with the default value of <xc>0.00</xc>.
Letting the game play now will yield the same result as before adding the <xp>BallCollider</xp>, this is because the impulse applied has a strength of 0, which means that no force is applied to the Ball. Try to change <xp>PaddleImpulse</xp> to <xc>0.01</xc>: you will see that the ball gets a little higher every time it hits the paddle, which is exactly what we wanted to achieve.

This is the final code, for reference:
{% gist SirePi/4a20477254b4790e4e28 ball_02.cs %}

And that's all for the first part of this tutorial. In a few days I will hopefully have the rest ready :D