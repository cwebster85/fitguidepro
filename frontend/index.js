document.getElementById("btn").addEventListener("click", async () => {
  const muscle = 'biceps';
  try {
    const response = await fetch(`http://localhost:3000/muscle-group?muscle=${muscle}`);
    if (!response.ok) {
      throw new Error('Failed to fetch workout data');
    }
    const data = await response.json();
    console.log("Data from server:", data);
    document.getElementById("muscle-group").innerHTML = `<p>${JSON.stringify(data)}</p>`;
  } catch (error) {
    console.error('Failed to fetch workout data:', error);
  }
});


document.getElementById("btn").addEventListener("click", async () => {
  const muscle = 'triceps';
  try {
    const response = await fetch(`http://localhost:3000/muscle-group?muscle=${muscle}`);
    if (!response.ok) {
      throw new Error('Failed to fetch workout data');
    }
    const data = await response.json();
    console.log("Data from server:", data);
    document.getElementById("muscle-group").innerHTML = `<p>${JSON.stringify(data[0])}</p>`;
  } catch (error) {
    console.error('Failed to fetch workout data:', error);
    // Handle errors gracefully, like displaying an error message to the user
  }
});

