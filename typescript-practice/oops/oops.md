# OOPS Concepts:

JavaScript & TypeScript are not going to strictly follow oops concepts.Later versions of Javascript they have introduced oops concepts flavour its not exactly strict oops concepts like Java Programming.

1. classes
2. objects
3. constructors
4. inheritance
5. polymorphism
6. abstraction
7. encapsulation
8. static members
9. access modifiers
10. interfaces
11. abstract classes
12. this & super keywords

## Class

Class is a datatype / template, that is going to provide more structured way to define all the data, methods, and objects together at one place.

## Object

Object is nothing but new instance of the class. (It is Xerox copy of the original class)

## Constructor

Constructor is a default method created by Typescript, every time we are going to create a new class that is going to inialize all the properties of the class when we are going to create an object.

## Inheritance

Inheritance is a concept of extending parent class properties into child class without creating any object.

1. Single Inheritance ==> Class2 extends Class1
2. Multi-level Inheritance ==> Class2 extends Class1, Class3 extends Class2
3. Hierarical Inheritance ==> Class2 extends Class1, Class3 extends Class1
4. Multiple Inheritance ==> (This is not supported in Typescript normal classes, but we can achieve the same using Interfaces) --> Class3 extends Class1, Class2

## this & super keywords

'this' refers current class instances.
'super' refers to the super / parent class instances.

## Abstraction

Abstraction is a concept of hiding the implementation.

## Interface

100% Abstract class.

## Polymophism

concept of having one method with different implementations.

compile-time(method overloading) ==> having multiple methods with in the same class, with same name and diffrent parameters.
run-time(method overriding) ==> having multiple methods with same name and same parameters between Parent and child class.
