---
layout: post
title: "A basic loading screen in Duality"
date: 2015-03-09 07:52:58
author: SirePi
tags: [duality, tutorial]
published: true
lesson: none
images: loading-screen
---
One thing I find extremely useful given Duality's ContentProvider's loading mechanism (only load what you need when you need it) is to have a separate loading screen in order to preload all the necessary resources before they are actually needed in a Scene, thus avoiding that small-but-sometimes-noticeable stuttering in the gameplay.
<!--more-->

If we look at the loading screens that are around nowadays, one can also notice that they have moved well past the simple "look at this screen while you can't play" phase and became more like introductory screens, with tips, suggestions or recaps about what happened in the game up to that point.  
What you will find here though, it's a simple, no-frills-added loading screen (and be thankful that I added a progress bar :D) that you can customize as much as you want.

{% gist SirePi/3896e73de57f6185d70c ResourcesLoader.cs %}

Please note that, although in the code I explicitly set Textures and Materials as not to be loaded, there is actually no issue for this kind of loading screen, since the loading process is performed in the same thread as the rest of Duality.  
It would be different if you wanted to use a secondary thread to perform the actual loading while showing not-choppy animations on the screen.

You can grab the full sample project (to be extracted inside a vanilla Duality project) {% include file_download.html file='2015-03-09-loading-screen.zip' text='here' %}.