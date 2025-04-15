---
layout: post
title: Gettier Problems in Machine Learning [draft]
tag: Philosophy
category: posts
order: 2
pagestyle: base
pagestyle2: post
---
Have a look at one of the most prominent philosophical puzzles through the lenses of machine learning.

## Gettier Problems

If you haven't heard the term already, here’s the gist of it. The Classical Account of Knowledge suggests the following:
> One can know a proposition is true, only if:<br>
1) The proposition is true;<br>
2) One believes the proposition;<br>
3) and One’s beliefs are justified.

According to this view of knowledge, knowledge is just justified true belief. That every time you come to a conclusion q through p implying it, p needs to be true and justified so as to lead to it. This justification needs to satisfy the anti-luck intuition and the ability intuition. The anti-luck intuition simply states that your knowledge isn’t just out of luck that you’ve got it right while e the ability intuition states that this knowing was down to your cognitive abilities.

Now, this account of knowledge is plausible. But around the 1960s, Edmund Gettier got to disproving the basis of this account of knowledge.

## The Stopped Clock Case

![](https://cdn-images-1.medium.com/max/2100/1*XLI8dZvCjiyo03BI5hi-HA.jpeg)

This was stated by Bertrand Russel to prove a different point but we shall use this example here. Let us say you get up one morning and look at the time on your clock. This clock is very reliable and there is absolutely no reason you’d doubt that the clock is showing you the wrong time. Also, the time shown by the clock corresponds to what time you might take it to roughly be.

But here’s the problem. That clock stopped working 24 hours ago exactly. The moment you’re looking at it, it just so happens that it is showing you the correct time. This is pure luck. But is the inference you make of the time actually knowledge? Well, one would argue that a clock that isn’t working can never show you the correct time and how you got the proposition of the time correct was just luck attacking the anti-luck intuition. So, you have a justified true belief that doesn’t satisfy knowledge.

Another case could be, looking at the above image of a clock and imagining whether it is one of a stopped clock or a working one.

## The Sheep Case

This example is from the American philosopher Roderick Chisholm. Imagine a farmer looking at a field in clear daylight and seeing what looks like a sheep. This is a justified true belief.

Now, imagine that we set the case such that the farmer is not looking at a real sheep but a sheep-shaped object and there really is a sheep behind the view of a sheep-shaped object. That means the farmer has a true belief but what he is looking at isn’t a sheep but a sheep shaped object.

## Generalizing Gettier Problems

Step 1. Take a belief that is formed in such a way that it would result in a false belief but is justified nonetheless.

Step 2. Make the belief true, albeit for reasons that have nothing to do with the subject’s justification of the case.

## The Solution

People thought the solution to Gettier cases would be quite simple. Maybe just add something onto the tripartite analysis or negate Gettier completely.

Keith Lehrer suggested that we add in a fourth clause saying that your belief shouldn’t be based on any false assumptions. But there are problems with this. In the clock case, it simply isn’t psychologically plausible that you start to question whether the clock is working or not. And what are even assumptions?

The definition of an assumption can not be so narrow so as to assume that the clock is working or so broad that genuine knowledge shall be excluded.

Another solution was by Lukasz Lozanski, who completely negates the Gettier problems saying that assumptions made were far too specific to generalize conclusions we reached at. And thus, the knowledge we concluded with was either not justified or false. Or the fact that there could be logical flaws in the case stated in his article [here](https://philosophynow.org/issues/63/The_Gettier_Problem_No_Longer_a_Problem).

With all that kept in mind, I don’t think Gettier cases are so far-fetched or logically flawed so as to cease all existence. And hence, I shall present my own and the problems that follow.

## The Machine Learning Gettier Case

![](https://cdn-images-1.medium.com/max/3200/1*g05i8hAF4S0isX44eqOquw.gif)

When it comes to ML we have one basic problem we try to solve: Character Recognition. It’s quite simple, you design a neural network that classifies all the Unicode characters there can possibly exist. Let’s say you write two really similar characters on two separate parchment paper. These two: ⻳ and 龟. This is the 2nd last example on this [site](http://www.unicode.org/Public/security/latest/confusables.txt). The first Unicode character has a description different from the second, so technically they are two different characters. Now, you keep the incorrect character’s butter paper in front of the correct character. The answer classified by the algorithm is of the correct character even though, it’s supposed to be of the incorrect character.

How would you justify correct answers that have false assumptions to a machine? This is something above hoaxes because otherwise, you can just completely negate the case stating that it is completely untrue. In this case, we can’t alter the weights leading to a supposedly correct solution.

To me, this example poses a problem to machine learning algorithms, not ones that just classify but in the real world, this example exemplifies. When robots are supposed to make inferences that might be correct because they are justified and true but for the fact that in this case aren’t seemingly. If this continues, it’ll become a barrier in the way machines learn.
