# Online Graphing Calculator

# Usage
- Real xy
  - Rectangular Coordinate System
```
a=5
f(x,y)=x^2+y^2
a>f(x,y)
```
  - Polar Coordinate System
```

3>r^2-r-sin5θ
```
- Complex z
  - Rectangular Coordinate System
```
c=2+i
1>abs(z-c)
```

# grammar
```
line = defi | ineq

defi = [A-z]+("(" [A-z]+ ( "," [A-z]+ )* ")")? "=" expr

ineq = expr ((">" | "<") expr)+

expr = ("+" | "-")? mult ("+" mult | "-" mult)*
mult = powr (powr | "*" powr | "/" powr)*
powr = prim ("^" prim)*
prim = "(" expr ")" | func | v | n
func = f mult | f "(" expr ("," expr)* ")"
n = 0 | 1 | 2 | ...
/*  Type "pi", "tau" to write π, τ.                           *\
\*  Other greek letters can also be written in the same way.  */
v = "x" | "y" | "e" | "π" | "τ"
f = "abs" | "cos" | "sin" | "tan" | "floor" | "round" | "ceil" | "exp" | "ln" | "mod"
```
