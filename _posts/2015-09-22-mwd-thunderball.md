---
layout: post
title: "Made with Duality #2 - Thunderball"
date: 2015-09-22 14:19:22
author: SirePi
tags: [duality, made with duality]
published: true
lesson: mwd#2
images: mwd-thunderball
---
Second episode of Made with Duality! This time, get ready for some shocking action...
<!--more-->

#### Thunderball
This second piece, called Thunderball (in case it was not clear yet :D) consists of a <xn>Ball</xn>, a <xn>Repulsor</xn> (the red sparkly thingy), and a <xn>Attractor</xn> (the green one). The goal of this scene was to toy around with physics and lightning generators; might be some kind of very, very early game concept?

Opposed to the [first episode]({% post_url 2015-09-09-mwd-dragon %}), where the scene was pretty nice to see but quite poor in terms of stuff going on, this time there are more things moving around, and a little less eye-candy.

In particular, the ball interacts with both repulsor and attractor as follows:
if the ball is near enough (i.e. its distance is less than a configured threshold) to either the repulsor or the attractor, it will get, respectively, pushed away or towards the corresponding entity with a strength proportional to the inverse of the distance (the closer, the stronger the effect will be). 
In case the ball is near to both, only the closer one will apply its effects. 

To do this, I created a custom component in charge of verifying the distances, alter the LinearVelocity of the ball when needed, and, in a second time, I decided to add a soundFX when hitting the border of the game area.
Said game area, like in the [Breakout tutorial]({% post_url 2015-03-03-bouncing-balls %}), is made by simply encircling the colored screen with invisible <xp>Static RigidBodies</xp>.

Both the repulsor and the attractor use a Particle Emitter with different settings in order to show where they are; in addition they also contain a RigidBody like the ball to be able to bounce around the game area.

The ball instead, includes a Lightning emitter whose target and color are changed in real time, depending on the fact that is under the effects of the repulsor or the attractor.

This time it took around 4 hours to have everything together and working as expected, plus another 4 hours of tuning (but in that case, it was more like 5 minutes playing around with settings and 10 minutes watching it moving around).

This is what it looks like, but of course a picture is not enough this time...

{% include lightbox.html img='1' %}

... so if you want to see how it looks in motion, just download it {% include file_download.html file='2015-09-22-mwd-thunderball.zip' text='here' %} and check it out!

#### Credits
Here the full list of the assets used:

|               |                  |
| ------------- | ---------------- |
| <xn>Sound</xn> | PongBlipF4.wav by [NoiseCollector @freesound](http://www.freesound.org/people/NoiseCollector/sounds/4359/) 
|               |                  |

Nothing else.. all the other assets are either part of the Duality engine (the Duality logo used as the ball texture), made by me (the line texture used by the particle emitters) or procedurally generated (the lightning bolts).

#### Final words

Again, that's all. If you have questions, comments, or simply would like the full Scene project, just leave me a message in the Contact section, or drop a line in the [MWD's topic on Duality's forums](http://forum.adamslair.net/viewtopic.php?f=18&t=554).