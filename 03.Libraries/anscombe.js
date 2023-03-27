// Data for the four datasets
const data = [
	{ x: [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5], y: [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68] },
	{ x: [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5], y: [9.14, 8.14, 8.74, 8.77, 9.26, 8.1, 6.13, 3.1, 9.13, 7.26, 4.74] },
	{ x: [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5], y: [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73] },
	{ x: [8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], y: [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.5, 5.56, 7.91, 6.89] },
  ];
  
  // Canvas setup
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw axes
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(20, canvas.height - 20);
  ctx.lineTo(canvas.width - 20, canvas.height - 20);
  ctx.moveTo(20, canvas.height - 20);
  ctx.lineTo(20, 20);
  ctx.stroke();
  
  // Draw points for each dataset
  for (let i = 0; i < 4; i++) {
	const dataset = data[i];
	ctx.fillStyle = `hsl(${i * 60}, 80%, 50%)`;
	for (let j = 0; j < dataset.x.length; j++) {
	  const x = dataset.x[j];
	  const y = dataset.y[j];
	  const px = 20 + (x - 4) * (canvas.width - 40) / 16;
	  const py = canvas.height - 20 - (y - 3) * (canvas.height - 40) / 10;
	  ctx.beginPath();
	  ctx.arc(px, py, 3, 0, 2 * Math.PI);
	  ctx.fill();
	}
  }