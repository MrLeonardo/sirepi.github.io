---
layout: post
title: "Broken Galaxy - alpha 2"
date: 2015-12-03 12:53:25
author: SirePi
tags: [duality, broken galaxy]
published: true
lesson: brokengalaxy#3
images: broken-galaxy-alpha-2
---
Well, it took a while, but finally alpha 2 of <xn>Broken Galaxy</xn> is ready and available!
<!--more-->

#### What took so long?
Well, unfortunately a lot of things happened in life, and a good part of my already limited free time was taken to rebuild (twice) the UI system of the game, in order to accomodate the new menus. Now the UI is more or less defined in style, although some parts are still missing or not fully operational, and you can finally play a new game without the need to restart the whole thing. 

You will find the download link at the bottom of the page.

#### What's new
Compared to my first idea, I decided to streamline the resource management aspect of the game, in particular leaving only two resources: <xn>Production</xn> and <xn>Technology</xn>.

The <xn>Production</xn> value of a System will determine the speed of construction for *ships* and *mines* in said system, while its <xn>Technology</xn> value will be added every turn to the player's *technology pool*, from which it will be possible to spend points to unlock various technologies (this feature is currently not implemented).

In addition, now planets have a <xn>Population</xn> value and a population cap. Once colonized, a planet will start out with 1 unit of population, and this will increase by itself over the course of the turns. Each unit of population contributes to both the production and technology values of the planet and, by consequence, of the entire Star System.

Lastly, you can now somewhat configure the kind of game you want to play, from the 5 minutes 10x10 map with 1 AI, to the massive and time consuming 50x50 with 4 AI galaxy.

#### What's next
For the next release I plan to have one or more of the following implemented:

* Fully working options menu
* Music and sounds
* Tech tree
* Planetary modifiers

#### The controls
Same as before, the game is played entirely with the mouse, with the exception of the spacebar that pauses/unpauses the game and escape key that toggles the menu. As always, it costs 5 ships to colonize a planet.

|               |                  |
| -------------:| ---------------- |
| <xn>Spacebar</xn>      | Toggle pause     |
| <xn>Escape</xn>      | Toggle menu     |
| <xn>Left click</xn>  | Select           |
| <xn>Right click</xn>  | Open System menu |
| <xn>Hold Left on empty space + Drag</xn> | Drag the map |
| <xn>Hold Left on a controlled system + Drag to a neighbor system</xn> | Create a fixed link - Fleets will be sent continuously to the targeted system |
| <xn>Left click on a controlled, linked system, Left click again</xn> | Remove link           |
|               |                  |

#### Planetary types and production
For the moment, there are the following planetary types and sizes influencing production and technology of a plane- the values of Production and Technology are to be intended as the amount produced by each unit of population for each turn:

| Type          | Production       | Technology       | Population   |
| -------------:| ---------------- | ---------------- | ---------------- |
| <xn>Terran</xn>      | 0.05     | 0.05 | 7 |
| <xn>Volcanic</xn>      | 0.075 | 0.025 | 4 |
| <xn>Glacial</xn>  | 0.025 | 0.075 | 6 |
| <xn>Asteroid</xn>  | 0.1 | 0.05 | 3 |

| Size          | Population   |
| -------------:| ---------------- |
| <xn>Small</xn>  | x1     |
| <xn>Medium</xn> | x1.5   |
| <xn>Large</xn>  | x2     |


#### Known issues
* Sometimes a planet's population growth appears to happen too fast - I still don't understand why this happens..
* The Options menu has no effect on the game now - it's there but not implemented yet.
* The AI is still quite stupid.
* If you go towards the bigger maps (over 40x40) the game *will* lag considerably.
* Mines always appear as a number / 0 indication. The current mines cap is 10.

#### Gallery
Some pictures...
{% include lightbox.html img='1' %}

{% include lightbox.html img='2' %}

{% include lightbox.html img='3' %}

{% include lightbox.html img='4' %}

#### Download
Finally, you can download the game {% include file_download.html file='2015-12-03-broken-galaxy-alpha2.zip' text='here' %} 

And that's all. If you have questions or comments, just leave me a message in the Contact section, or drop a line in the [Broken Galaxy's topic on Duality's forums](http://forum.adamslair.net/viewtopic.php?f=18&t=277).

Til next time...
