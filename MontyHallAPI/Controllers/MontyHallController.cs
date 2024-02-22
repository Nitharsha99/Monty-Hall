using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MontyHallAPI.Models;
using Newtonsoft.Json;
using System;

namespace MontyHallAPI.Controllers
{
    [Route("api/montyHall")]
    [ApiController]
    public class MontyHallController : ControllerBase
    {
        private readonly Random _random = new Random();


        [HttpPost]
        [Route("")]
        public IActionResult Simulation(Simulation simulation)
        {
            try 
            {
                int winCount = 0;

                if (simulation != null)
                {
                    for (int i = 0; i < simulation.NumSimulations; i++)
                    {
                        int carDoor = _random.Next(3);
                        int chosenDoor = _random.Next(3);
                        int revealedDoor;

                        do
                        {
                            revealedDoor = _random.Next(3);
                        } while (revealedDoor == carDoor || revealedDoor == chosenDoor);
                        if (simulation.ChangeDoor)
                        {
                            chosenDoor = 3 - chosenDoor - revealedDoor; // Switch door
                        }
                        if (chosenDoor == carDoor)
                        {
                            winCount++;
                        }

                    }

                     double winPercentage = (double)winCount / simulation.NumSimulations * 100;
                    return Ok(JsonConvert.SerializeObject(new { winCount, winPercentage, simulation.NumSimulations, simulation.ChangeDoor }));
                }
                else {
                    return BadRequest("Data is null");
                        }
            }
            catch (Exception ex) { 
                return BadRequest("Invalid Process : " + ex.Message);
            }
            
        }
    }
}
