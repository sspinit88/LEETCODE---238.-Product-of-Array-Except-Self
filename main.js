/*
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

Follow up: 
    Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


*/

function productExceptSelf(nums) {
  // Инициализация массивов left и right
  // Initialize the left and right arrays
  let n = nums.length;
  let left = new Array(n);
  let right = new Array(n);

  // Заполнение массива left
  // Fill the left array
  left[0] = 1;
  for (let i = 1; i < n; i++) {
      // Произведение всех чисел слева от текущего числа
      // The product of all numbers to the left of the current number
      left[i] = nums[i - 1] * left[i - 1];
  }

  // Заполнение массива right
  // Fill the right array
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
      // Произведение всех чисел справа от текущего числа
      // The product of all numbers to the right of the current number
      right[i] = nums[i + 1] * right[i + 1];
  }

  // Вычисление результата
  // Calculate the result
  for (let i = 0; i < n; i++) {
      // Произведение всех чисел, кроме текущего, равно произведению соответствующих элементов в массивах left и right
      // The product of all numbers except the current one is the product of the corresponding elements in the left and right arrays
      nums[i] = left[i] * right[i];
  }

  return nums;
}

/*

This solution ensures that the algorithm runs in O(n) time and without using the division operation. 
The space complexity is O(n), but if you want to solve the problem in O(1) extra space complexity, 
you can use the input array and a single variable to store the intermediate products instead of using two separate arrays.

Это решение гарантирует, что алгоритм работает за время O(n) и без использования операции деления.
Пространственная сложность равна O(n), но если вы хотите решить задачу с дополнительной пространственной сложностью O(1),
вы можете использовать входной массив и одну переменную для хранения промежуточных продуктов вместо использования двух отдельных массивов.

*/

function productExceptSelf(nums) {
  // Инициализация результата
  // Initialize the result
  let n = nums.length;
  let result = new Array(n);

  // Заполнение результата произведением всех чисел слева от текущего числа
  // Fill the result with the product of all numbers to the left of the current number
  result[0] = 1;
  for (let i = 1; i < n; i++) {
      result[i] = nums[i - 1] * result[i - 1];
  }

  // Вычисление произведения всех чисел справа от текущего числа и умножение его на соответствующий элемент в результате
  // Calculate the product of all numbers to the right of the current number and multiply it by the corresponding element in the result
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
  }

  return result;
}
