using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using TodoApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApp.API
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return new List<TodoItem>
            {
                new TodoItem {Id=1,Name="First Task",DueDate=DateTime.Today.AddDays(2),IsComplete=false },
                new TodoItem {Id=2,Name="Second Task",DueDate=DateTime.Today.AddDays(4),IsComplete=false },
                new TodoItem {Id=3,Name="Third Task",DueDate=DateTime.Today.AddDays(23),IsComplete=false },
            };
        }


        [HttpPost, Route("api/items/add")]
        public IActionResult Post([FromBody]TodoItem item)
        {
            return new ObjectResult(item);
        }

    }
}
