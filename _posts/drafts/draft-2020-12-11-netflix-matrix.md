---
layout: post
title: Netflix Recommendation Systems through Matrices [draft]
tag: draft
category: posts
order: 0
pagestyle: base
pagestyle2: post
---
## Idea 1
I'm going to presume you have basic knowledge of recommendation systems in general and Netflix. In this blog post, I shall try to write a solution to the Netflix Prize problem, probably a really simple recommendation system through the application of 2D matrices, and successively try to better optimize the solution and see what new math brings to solving the problem.

In this case, you're presented with an incomplete 2D matrix as follows:
<br>
<img alt="movie"
src="/images/2020/math-1.png"
height="11.5%"
width="11.5%">
<img alt="matrix"
src="/images/2020/matrix.png"
height="50%"
width="50%">
<br>
Now in this matrix, you are told to predict the following x for user[1].
<br>
<img alt="movie"
src="/images/2020/math-1.png"
height="11.5%"
width="11.5%">
<img alt="matrix with x"
src="/images/2020/matrix-x.png"
height="50%"
width="50%">
<br>
So my basic instinct to solve this problem was that you see some of the movies user[1] has already rated. Then for those movies, look at which other users gave a similar rating. Like so:
<br>
<img alt="movie"
src="/images/2020/math-1.png"
height="11.5%"
width="11.5%">
<img alt="matrix with same rating pointers"
src="/images/2020/same-ratings.png"
height="250%"
width="250%">
<br>
And then for each of these ratings, it would go to the rating that that user has given for the movie[0] and so you basically calculate the average from all of these ratings to arrive at the rating for x.
<br>
<img alt="movie"
src="/images/2020/math-1.png"
height="11.5%"
width="11.5%">
<img alt="final rating"
src="/images/2020/final-rating.png"
height="250%"
width="250%">
<br>
This is extremely simple math now, x = (2 + 5 + 4)/ 3 = 3.6 = 4. Writing the code for this, however, is a little complex.

### The Pseudocode

We create nodes like such:

{% highlight python %}
Node:
    Rating = x
    Movie = i
    User = j
    user-rated = 1 if rated by user, 0 if rated by algorithm
{% endhighlight %}

And then the algorithm would go something like:

{% highlight python %}
for user[1]:
    user[1]->head->movie[1]         ...->movie[6]
                   rating = 2            rating = 3
                   |                     |
                   v                     v...
                   movie[1]->head->user[0]
                                   rating = 2
                                   |
                                   v
                                   user[0]->head->movie[0]
                                                  rating = 2
{% endhighlight %}

Really, this is just the diagram written in a more systematized manner, one that makes you think of code. I do hope someone other than me, understands it. Writing the solution in this half-diagram and half-code manner suggested something crucial to me: we need two graphs that talk to each other. 

Graph 1:

{% highlight python %}
movie->head->user[0]->user[1]...
             rating   rating
{% endhighlight %}

Graph 2:

{% highlight python %}
user->head->movie[0]->movie[1]...
            rating   rating
{% endhighlight %}

Yeah, the space complexity increases, but on the other hand, computing it would become a lot easier.

The other way is just one graph that combines both, which is actually the original one. It's most probably the most correct solution. Anyway, I'll probably play around and come up with something along the way.

Also, I know this idea is bad but I'm gonna justify its scalability anyway. Each user-movie graph would be specific to a region of people, so on their own, they would be small. Then the calculation of x would be for at max n of the latest movies the user has watched, and look at on n of the closest members on the graph at max. It is a linear time solution.

The only problem I have with this solution is the fact that if user[m] and user[m + n] have watched the exact same movies and given them the exact same ratings even then, it shan't be the case that we provide them with the same recommendations. In this way, we compute for the same input twice, and I fully acknowledge its redundancy but then it saves a lot of time complexity in the code by solving it the way it has been.

A little YouTube scan, and obviously this is the worst approach. I feel like I should date these blog/monologues inside each blog-post because all of them seem like a 5-day affair, and this one shall probably take about a month to complete. It's the 12th of December now, and I'm a little iffy about whether I should convert that pseudocode into actual code, like although useless it would give me a good idea of this half-DFS search. The other realization is that not all searches are pure DFS-BFS based.

## Idea 2 (the mathematical approach)

All paths lead to ~~Rome~~ [matrix factorization](https://en.wikipedia.org/wiki/Matrix_factorization_(recommender_systems)).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZspR5PZemcs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And another one, for Spotify's algorithm.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HKW_v0xLHH4?start=497" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

And then this [playlist](https://www.youtube.com/watch?v=gXbThCXjZFM&list=PLMrJAkhIeNNSVjnsviglFoY2nXildDCcv&ab_channel=SteveBrunton) by Steve Burton of the University of California, for all the math I need to study before officially sitting down to solve it. Time to get messy with [single value decompositions](https://en.wikipedia.org/wiki/Singular_value_decomposition).