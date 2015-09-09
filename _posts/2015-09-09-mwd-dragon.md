---
layout: post
title: "Made with Duality #1 - Moon Dragon"
date: 2015-09-09 13:27:14
author: SirePi
tags: [duality, made with duality]
published: true
lesson: mwd#1
images: mwd-moon-dragon
---
In Made with Duality I will try to display a number of things that can be done quickly and without significant programming effort with Duality (and the help of some of my other plugins - yay! advertise! :D)
<!--more-->

#### Moon Dragon
So, this first piece I creatively called "Moon Dragon" is basically a single screen which I believe that, with some extra polishing and GameObjects, could become something like a main menu or loading/intro screen for a fantasy game.

It basically consists of 3 <xp>SpriteRenderers</xp>: one for the <xn>sky</xn>, one for the <xn>moon</xn> and one for the <xn>dragon</xn>.

In addition to that, and the background music, there are 2 volumetric <xp>Frozen FX Particle Emitters</xp>: one for the dark <xn>clouds</xn> in the foreground (you can see that some appear in front of the dragon, and some behind), and another off-screen that spawns <xn>meteors</xn> in the night sky (again, it's FXArea is set so that some spawn between the moon and the dragon, and some are behind them).

One thing of note is that the Particle Emitter I used for the meteors uses a new parameterthat makes it so that particles are spawned facing along their movement vector. <explain>This version of Frozen FX is not yet available on nuGet, but if you grab the dll from the project, you can use it ;)</explain>

All the art assets are <xn>NOT</xn> done by me and, honestly, I did nothing more than put the scene together (and create the Frozen Core plugin series, which is another story :D). To put it all together I took something like a couple of hours, and I spent 90% of that time editing and playing around with the images and music.

{% include lightbox.html img='1' %}

There is nothing much to say, really.. just download it {% include file_download.html file='2015-09-09-mwd-dragon.zip' text='here' %} and see what happens :)
Oh, the ProfileRenderer is enabled, so you can use F2, F3 and F4 to see some details about what's happening with Duality while the scene is playing. Enjoy!

#### Credits
Here the full list of the assets used:

|               |                  |
| ------------- | ---------------- |
| <xn>Sky texture</xn> | Night Sky wallpaper @[7Themes](http://7-themes.com/data_images/out/11/6804159-night-sky-wallpaper.jpg) |
| <xn>Dragon silhouette</xn> | [Kirsa Silhouette](http://2.bp.blogspot.com/-szamardb0OM/TdVrv6YH-WI/AAAAAAAAAcs/oMXQwvTz5Eg/s1600/KirsaSilhouette.png) by [Derelict-technica](http://forum.train2game.com/showthread.php/8651-Derelict-technica-s-Work-Thread) |
| <xn>Moon texture</xn> | [Pale Moon logo](https://upload.wikimedia.org/wikipedia/en/0/02/Pale_Moon_browser_logo.png) @Wikimedia |
| <xn>Meteor texture</xn> | [meteorit](http://www.deviantart.com/art/meteorit-322757817) by morsprinstock @Deviantart |
| <xn>Background music</xn> | [Castle of Despair](http://soundimage.org/wp-content/uploads/2015/03/Castle-of-Despair.mp3) by [EricMatyas' SoundImage](http://soundimage.org) |
|               |                  |

I also apologize that I cannot properly credit the creator of the smoke/cloud texture.. I downloaded it a loooong time ago and I forgot to categorize it appropriately.

And yes, it's a dragon, it has 4 limbs + wings :D

#### Final words

Well, that should be all. If you have questions, comments, or simply would like the full Scene project, just leave me a message in the Contact section, or drop a line in the [MWD's topic on Duality's forums](http://forum.adamslair.net/viewtopic.php?f=18&t=554).

See ya next time!
