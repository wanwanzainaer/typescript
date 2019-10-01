import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1/";

//For the struct define
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo wtih id: ${id},
  Todo title: ${title},
  Is it finished? ${completed}
  `);
};
