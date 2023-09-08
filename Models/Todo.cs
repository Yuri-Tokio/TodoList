using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoList.Models
{
    public class Todo
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string Time { get; set; }
        public string Done { get; set; }


    }
}