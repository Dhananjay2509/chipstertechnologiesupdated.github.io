

fetch('info.json')
  .then(response => response.json())
  .then(data => {
    
    const cardContainer = document.getElementById('card-container');
    
  
    data.forEach(item => {
      // Create a new card element
      const card = document.createElement('div');
      card.classList.add('card');
      

      const machineRow = document.createElement('div');
      machineRow.classList.add('row');
      const machineText = document.createTextNode(`MACHINE: ${item.MACHINE}`);
      machineRow.appendChild(machineText);
      card.appendChild(machineRow);
      
      const performanceRow = document.createElement('div');
      performanceRow.classList.add('row');
      const performanceText = document.createTextNode(`PERFORMANCE: ${item.PERFORMANCE}`);
      performanceRow.appendChild(performanceText);
      card.appendChild(performanceRow);
      
      const runningSinceRow = document.createElement('div');
      runningSinceRow.classList.add('row');
      const runningSinceText = document.createTextNode(`RUNNING SINCE: ${item.RUNNINGSINCE}`);
      runningSinceRow.appendChild(runningSinceText);
      card.appendChild(runningSinceRow);
      
      const partsProducedRow = document.createElement('div');
      partsProducedRow.classList.add('row');
      const partsProducedText = document.createTextNode(`PARTS PRODUCED: ${item.PARTSPRODUCED}`);
      partsProducedRow.appendChild(partsProducedText);
      card.appendChild(partsProducedRow);
      
      const statusRow = document.createElement('div');
      statusRow.classList.add('row');
      const statusText = document.createTextNode(`STATUS: ${item.STATUS}`);
      statusRow.appendChild(statusText);
      card.appendChild(statusRow);
      
      // Add the card to the container
      cardContainer.appendChild(card);
    });
  });