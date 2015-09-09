---
layout: post
title: "Broken Galaxy - alpha 1"
date: 2015-03-14 15:18:28
author: SirePi
tags: [duality, broken galaxy]
published: true
lesson: brokengalaxy#1
images: broken-galaxy-alpha-1
---
And now, ladies and gentlemen, I am proud to present the release of alpha 1 of <xn>Broken Galaxy</xn>!
<!--more-->

#### What is it?
It's a 4X-lite strategy game of space conquest, heavily inspired by <a href="http://www.kongregate.com/games/kendja/little-stars-for-little-wars">Little Stars for Little Wars</a> and <a href="http://starlink.tasharen.com/">Starlink</a>.

What I plan to do is expanding on their ideas, and then adding some more stretegic depth, such as a (small) technology tree, different playable races or player customization, multiple (but still few) resources, and complete star systems to manage instead of simple "nodes" to capture.
Basically, I will try to take those two games and mix with a sprinkle of *Master of Orion* / *Galactic Civilization*.
The game will play out in real time, with each action based on an internal "turn" timer that runs by itself, but at the same time it will be possible to pause the game at any moment and issue orders without the pressure of a real time environment, which I believe will be useful in the bigger and longer scenarios.

Of course, this means that the games will not be as quick and there will be a slightly longer learning curve, but I still plan to keep them short and varied enough to keep people interested for more than one playthrough.

The maps will be randomly generated each game, allowing players to configure the generation engine ala Civilizations with stuff like map size, number of opponents, difficulty, etc.

#### How to play?
Well, first of all you have to download the game from {% include file_download.html file='2015-03-14-broken-galaxy-alpha1.zip' text='here' %} and make sure your screen resolution is at least <xn>1200x800</xn> - although you can resize the game window, it's not fully tested and *bad things might happen™*

Once you extract it, simply launch DualityLauncher.exe and it will start.
After <s>a few</s> some seconds, during which the map and some textures are being generated, you will see the game proper.

The game starts paused - the objective: be the sole interstellar civilizazion standing in the sector.

This is how it looks (since the map is randomly generated, don't expect to find this exact screenshot :D)
{% include lightbox.html img='1' %}

#### The controls
The game is played entirely with the mouse, with the exception of the spacebar that pauses/unpauses the game.

|               |                  |
| -------------:| ---------------- |
| <xn>Spacebar</xn>      | Toggle pause     |
| <xn>Left click</xn>  | Select           |
| <xn>Right click</xn>  | Open System menu |
| <xn>Hold Left on empty space + Drag</xn> | Drag the map |
| <xn>Hold Left on a controlled system + Drag to a neighbor system</xn> | Create a fixed link - Fleets will be sent continuously to the targeted system |
| <xn>Left click on a controlled, linked system, Left click again</xn> | Remove link           |
|               |                  |

Sounds complicated but it's not, really.. plus the cursor will change depending on the action you will perform so it's just a matter of trying around a little. It's easier done than said :D

Plus, you can still give orders and move around while the game is paused so you can experiment with all the commands without the feeling of the AI creeping up on you.

#### Combat resolution
Combat is quite straightforward:
whenever two opposing fleets meet, both lose ships equal to the amount of ships in the enemy's fleet. The bigger one wins and its ships are reduced, and the smaller one is destroyed.

Star system attacks include the presence of mines around the system, protecting it and its fleets from outside attacks. The rules are the same as the fleet-fleet encounter, with the addition that the attacking fleet must first fight against the mines, and the remaining ships will carry on with the attack against the fleet stationed at the system. Don't worry, <xm>mines are capped at 10</xm>.

Once a system has no ships or mines in orbit, any fleet will be able to conquer it.

#### Colonization
The last thing to know is that even though you conquered a star system, doesn't mean that you can gain something. You first need to colonize its planets.
For the moment, to colonize a planet or asteroid ring, you need to spend <xn>5 ships</xn> currently in orbit. This will be changed in the future with the addition of money and technology requirements for the various planet types.

Currently, each planet type and size behaves differently in tems of production (which you can see as some colored bars in the System menu - they don't do anything else for now); in terms of usefulness for the game, as it is now, you should try to focus on these (in order): *Asteroids*, *Terran*, *Volcanic*, *Glacial*.

Lastly, keep in mind that your starting system is not fully colonized! <xm>You start with one planet, 5 ships (just enough to colonize another one) and that's it</xm>.

#### AI?
Yes, it's quite stupid at the moment and its movements are heavily scripted and based on easily observable conditions. The only way it has to win now is probably if it gets a better starting position than the player, or if you make a huge mistake. Although sometimes it somehow managed to "outsmart" me.
After the first couple or so games, you will most likely understand how it "thinks" and what it will do next.

#### Ok, I won (or lost).. now what?
Now, just close the game and restart it, if you want :)

#### What might go wrong?
<explain>
Everything :D I tried to take care of all the possible situations that could lead to a crash or a freeze of the application but, this being an alpha and me being a simple developer, I cannot guarantee 100% that your experience will be a happy, satisfactory and crash-free one.
Besides, Murphy is always behind the corner.
</explain>

Well, that should be all. If you have questions or comments, just leave me a message in the Contact section, or drop a line in the [Broken Galaxy's topic on Duality's forums](http://forum.adamslair.net/viewtopic.php?f=18&t=277).

See ya!
