---
layout: post
title: "Diving into the DEAP"
tag: Machine Learning
category: posts
order: -1
pagestyle: base
pagestyle2: post
---
It's been a long time since I came back to this blog-thing. Not that anyone has missed me, but I think might've missed you Kitty.

A while ago I tried to take the NEW ANTS course by Mike X Cohen, and miserably failed at it... Although I do hope to go through it, but when dealing with the DEAP Dataset I think we're not going to be using MATLAB, or even Octave. If you crack MATLAB there's a whole bunch of issues you're gonna run into, and goddamn that crashing.

<p>The alternative: MNE Tools for Python. Relatively easy to install because unlike MATLAB you won't have to close stuff after adding plugins and going through the horrors of running into installation errors (there were none, but it's not as easy as <span class="inlinecode">pip3 install whatever-the-fuck-I-want-to</span>). So yeah ditch MATLAB.</p>

I must add though I was quite surprised as a first-timer to MATLAB to the amount of support in the community.

Okay so, let's get back on track to DEAP.

How do you download it? Well, it's password protected and and I'm into piracy.

Base8x8

Username:

Password:

I still think it's all the way from like 2010 or some shit, make it free already.

The next big issue I ran into was the dillema of preprcessed data or raw bdf files. To start with I actually plotted both of the them. Raw bdf files look like eeg, and the processed stuff looks pretty incomprehensible.

<figure>
<img alt="raw bdf" src="/images/2021/deap/rawbdf.png" height="100%" width="100%">
<figcaption align="center">Understandable.</figcaption>
</figure>


<figure>
<img alt="processed" src="/images/2021/deap/processed.png" height="100%" width="100%">
<figcaption align="center"><pikachu face: wut?></figcaption>
</figure>

So, we're gonna be ditching the pre-packaged-pre-done stuff for the glories of real-raw-bdf. Also, it's my incomptency but the way I understand it is maybe the pre-processed stuff is for passing into LSTMs and stuff and then you're done.

Code-code-code, where art thou?

Thought about it, I am at that stage of being sick of this blogging stuff to actually just upload jupyter notebooks here. But then my I came to my senses... we can't do that here.
