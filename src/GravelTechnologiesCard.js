import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardDevelopmentCard from './DashboardDevelopmentCard';
import DatabaseAdministrationCard from './DatabaseAdministrationCard';
import { common } from '@mui/material/colors';

// projectsArray[0].arcData
// projectsArray[0].arcData.datasets[0].data[0]

// fetch some data

const GravelTechnologiesCard = () => {
  // fetch data from backend (api layer)
  // Database -> API layer -> frontend -> makes the visual things


  let projectsArray = [
    {
      // workedHours: 200,
      // remainingHours: 250,
      projectName: 'Dashboard Development',
      arcData: {
        labels: ['Worked Hours', 'Remaining Hours'],
        datasets: [
          {
            data: [200, 250],
            backgroundColor: ['green', 'gray'],
            borderWidth: 0,
          },
        ],
      },
      arcOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw;
                return `${label}: ${value} hours`;
              },
            },
          },
        },
        cutout: '70%', // Adjust this value to create the arc effect
        rotation: -90, // Rotate the chart to cut off the bottom
        circumference: 180, // Show only the top half
      }
    }, 
    {
      // workedHours: 211,
      // remainingHours:  110,
      projectName: 'Database Administration',
      arcData: {
        labels: ['Worked Hours', 'Remaining Hours'],
        datasets: [
          {
            data: [211, 110],
            backgroundColor: ['green', 'gray'],
            borderWidth: 0,
          },
        ],
      },
      arcOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw;
                return `${label}: ${value} hours`;
              },
            },
          },
        },
        cutout: '70%', // Adjust this value to create the arc effect
        rotation: -90, // Rotate the chart to cut off the bottom
        circumference: 180, // Show only the top half
      }
    }
  ]

  // projectsArray.map(
  //   function (value) {
  //     return (value+1)
  //   }
  // )

  // make a new component generalizing a Project Card
  // Map over the data source to put the data in the card
  // render the results in the Gravel Technologies card


  
  return (
    <Card style={{backgroundColor: '#D8FDDE'}}>
      <CardContent>
        <Typography variant="h5" component="div" style={{textDecoration: 'underline'}}>
          Gravel Technologies
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 16 }}>
          {projectsArray.map(
            function(projectData) {
              return (
              <Grid item xs={12} md={6}>
                <DashboardDevelopmentCard 
                  arcInfo={projectData.arcData} 
                  projectName={projectData.projectName}
                  arcParams={projectData.arcOptions} 
                  hoursWorked={projectData.arcData.datasets[0].data[0]} 
                  hoursRemaining={projectData.arcData.datasets[0].data[1]} />
              </Grid>
              )
            }
          )}
          {/* <Grid item xs={12} md={6}>
            <DashboardDevelopmentCard 
              arcInfo={projectsArray[0].arcData} 
              arcParams={projectsArray[0].arcOptions} 
              hoursWorked={projectsArray[0].arcData.datasets[0].data[0]} 
              hoursRemaining={projectsArray[0].arcData.datasets[0].data[1]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatabaseAdministrationCard 
            arcInfo={projectsArray[1].arcData} 
            arcParams={projectsArray[1].arcOptions} 
            hoursWorked={projectsArray[1].arcData.datasets[0].data[0]} 
            hoursRemaining={projectsArray[1].arcData.datasets[0].data[1]} />
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

// companyArray = []
// // companyArray.map(x=>(thing))
// companyArray.map(function(company) {
//   return (stuff.map(function(projects){
//     return stuff2
//   }))
// })

// Array that contains all companies
// loop over that array to make each Company Card
// Within the company Card, loop over the projects to make a project card

export default GravelTechnologiesCard;