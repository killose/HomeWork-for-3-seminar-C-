// Задача 21
// Напишите программу, которая принимает на вход координаты двух точек и находит расстояние между ними в 3D пространстве.
// A (3,6,8); B (2,1,-7), -> 15.84
// A (7,-5, 0); B (1,-1,9) -> 11.53

function calc(A1,A2,A3,B1,B2,B3){
    let a = B1 - A1;
    let b = B2 - A2;
    let c = B3 - A3;
    return Math.sqrt(a * a + b * b + c * c);
  }
  
  console.log(calc(3,6,8,2,1,-7));
  console.log(calc(7,-5,0,1,-1,9));