---
layout: post
title:  "Cliffords in constant depth"
date:   2019-11-11 01:09:00 -0500
categories: jekyll update
---

Daniel Grier and Luke Schaeffer released a wonderful [paper](https://arxiv.org/pdf/1911.02555.pdf) on arXiv recently. In it, they  highlight some surprisingly stronger separations
between QNC<sup>0</sup>, constant depth quantum circuits, and constant depth classical circuits. For background, 
Bravyi, et al.'s major result two years ago was a strict separation between (noiseless) QNC<sup>0</sup> and NC<sup>0</sup> circuits by a problem called the "Hidden
Linear Function problem." But Grier and Schaeffer prove a stronger separation between (noiseless) QNC<sup>0</sup> and AC<sup>0</sup>[p] circuits in their new paper. And it was my first time seeing the use of Barrington's Theorem, and it's amazing just how 
general but powerful it is! 

In their paper, they point to a fairly old theorem in measurement-based quantum computation which I was even more surprised by. In short, it's that
any Clifford circuit can be implemented in constant depth by preparation of a constant degree grid state and constant depth MBQC if you're willing to incur detectable Pauli errors. 
