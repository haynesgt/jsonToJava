https://docs.oracle.com/javase/specs/jls/se7/html/jls-18.html

Chapter 18. Syntax

This chapter presents a grammar for the Java programming language.

The grammar presented piecemeal in the preceding chapters (§2.3) is much better for exposition, but it is not well suited as a basis for a parser. The grammar presented in this chapter is the basis for the reference implementation. Note that it is not an LL(1) grammar, though in many cases it minimizes the necessary look ahead.

The grammar below uses the following BNF-style conventions:

[x] denotes zero or one occurrences of x.

{x} denotes zero or more occurrences of x.

(x | y) means one of either x or y.
