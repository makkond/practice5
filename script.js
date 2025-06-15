"use strict";
console.log("Підключено JavaScript для Практичної роботи №5");

// 1. Завантаження користувачів з jsonplaceholder API
const loadUsersButton = document.getElementById("loadUsers");
const userOutput = document.getElementById("userOutput");

loadUsersButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("HTTP error: " + response.status);

    const data = await response.json();
    userOutput.textContent = JSON.stringify(data, null, 2);
    console.log("Користувачі завантажені:", data);
  } catch (error) {
    console.error("Помилка завантаження користувачів:", error);
    userOutput.textContent = `Помилка: ${error.message}`;
  }
});

// 2. Завантаження даних з PokeAPI
const loadPokemonButton = document.getElementById("loadPokemon");
const pokemonOutput = document.getElementById("pokemonOutput");

loadPokemonButton.addEventListener("click", async () => {
  const nameOrId = prompt("Введіть ім'я або ID покемона:");
  if (!nameOrId) return;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`
    );
    if (!response.ok)
      throw new Error("Покемона не знайдено. Спробуйте інше ім’я або ID.");

    const data = await response.json();
    const formattedData = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t) => t.type.name),
      abilities: data.abilities.map((a) => a.ability.name),
    };
    pokemonOutput.textContent = JSON.stringify(formattedData, null, 2);
    console.log("Дані покемона:", formattedData);
  } catch (error) {
    console.error("Помилка завантаження покемона:", error);
    pokemonOutput.textContent = `Помилка: ${error.message}`;
  }
});
