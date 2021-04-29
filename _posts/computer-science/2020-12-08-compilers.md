---
layout: post
title: The Meanderings of Designing Compilers
tag: Computer Science
category: posts
order: 1
pagestyle: base
pagestyle2: post
---
Recently, I've taken upon myself the herculean task of single-handedly designing a compiler for a completely new language. Yes, preposterous. The idea of this new language went something like, we have [Logo](https://en.wikipedia.org/wiki/Logo_(programming_language)) that can design really neat patterns with just a little math, why not have one that could make either moving patterns or a programming language that could convert something like basic Markdown to video format.

So, there is a company that claims just this: [Narakeet](https://www.narakeet.com) but it's proprietary.

The project is kind of way out of my league, and so I thought I would start small. First make a basic compiler for Logo, or even [COW](https://esolangs.org/wiki/COW). Found a couple of videos and I'm just ruthlessly going to list 5-6 that I shall follow through with:
1. [Building a Compiler by Immo Landwerth](https://www.youtube.com/watch?v=wgHIkdUQbp0&list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y)
2. [Write Your Own Compiler by Phil Trelford](https://youtu.be/-E2tu3MqR24)
3. [The Presentation Phil used in that video.](https://www.slideshare.net/ptrelford)
4. [Hjalfi writes a compiler](https://youtu.be/iUarU8Fhvug)

These are seriously long-ass videos, sigh... it's gonna take some serious time.

So anyways, I was watching Phil Trelford's video and he explains the most crucial term related to compiler design: [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree). And essentially, this is one of those terms that align with natural language processing.

![AST](https://i.stack.imgur.com/JDAbW.png)

If you're familiar with programming, you'll understand that at the crux of what a compiler does is it is dealing with the craziness of whatever code you write and converting it to its own sort of craziness that it understands better. It is for that reason that we create parsers. A parser's job is to look at your code and create an AST. I found this really neat guide explaining all of this: <https://tomassetti.me/guide-parsing-algorithms-terminology/>.

## The Meandering

No neat way to change topics than to label it a meandering. You probably get the idea of this website, my writings, and maybe even my existence. If not then, I want you to understand one aspect of it: I try to bend towards all sorts of topics because to talk simply in computer science terms would be too claustrophobic. To present new ideas in the field, we must think outside the means to actualize them. If you think about any programming language, you always think in the terms of a stack. If we were to tomorrow create a mind from these languages, we’d forever be constrained by that stack. Here’s what I present… why aren’t languages more graph? Traditional languages like C, although great, are kind of boxed. They go through line-by-line, maybe come across a function, load things on the stack, and eventually if there’s a run-time issue, they just stop. That’s that for them. Humans don’t. We don’t even read line-by-line, it’s what catches our interest that we move on to. There’s nothing that stops us from continuously compiling and making some sort of weighted decision of how to move forward. But on the other hand, we have the ability to go back to something done by us previously, to try and make ammends.

What would it mean for a language to be graph? 
{% comment %}
For this, let's take the example of an if-else ladder.

{% highlight c %}
if (a == 3)
	printf("a is 3");
else if (a == 4)
	printf("a is 4");
else
	printf("a is not 3 or 4");
{% endhighlight %}

<img alt="if-else weights"
src="/images/2020/if-else.png" height="50%" width="50%">

Here's a stage where your code is deciding on which path to take. Right now, every path in this case could have the weight of either 0 or 1. If anything midway of taking the decision of which path is 1 (the path to take) then subsequently every path prior to that path is 0 and similarly every path after the path been taken blindly equates to a zero. If you were constructing an if-else like this one, you'd rather write a switch-case, which is faster and much more human in that sense. But the point is, none of these weights are actual weights and none of these supposed paths are actual paths.

In that sense, concurrency feels a little more what we're aiming towards.
{% endcomment %}

A graph language would have the ability to move back and forth taking weighted decisios that don't range from only True to False. It would have memory of previous runs sponataneously increasing as it makes up for experience.

draft: <https://blog.opencog.org/page/2/>
<https://www.tutorialspoint.com/automata_theory/context_free_grammar_introduction.htm>
<https://en.wikipedia.org/wiki/Context-free_grammar>

draft 2(concurrency):
<https://sceweb.uhcl.edu/helm/RationalUnifiedProcess/process/workflow/ana_desi/co_cncry.htm>
<https://www.classes.cs.uchicago.edu/archive/2018/spring/12300-1/lab6.html>
