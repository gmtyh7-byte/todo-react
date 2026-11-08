# todo-react

Sample todo app built with the React/ReactDOM framework. For the accompanying documentation, see
[Understanding client-side JavaScript frameworks
: React tutorials](https://wiki.developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#React_tutorials).

For the live version, see https://mdn.github.io/todo-react/.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

To get this app running locally, you'll need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/getting-started/install) installed on your machine.
In the project directory, you can run:

```bash
yarn && yarn start
```

More information about the available commands can be found in the [Contributing](CONTRIBUTING.md) guide.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

The following sections are recommended:

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [npm run build fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Our project welcomes contributions from any member of our community.
To get started contributing, please see our [Contributor Guide](CONTRIBUTING.md).

By participating in and contributing to our projects and discussions, you acknowledge that you have read and agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [LICENSE](LICENSE).


# Project Structure: 주요 파일 2~3개의 역할
- main.jsx: data를 <App tasks={DATA} />로 주고 root에 렌더링한다. 초기 데이터 또한 여기에 있다.
- Form.jsx: 입력창과 add 버튼 관리
# React Component: 주요 컴포넌트 1~2개의 역할
- Form/: 새 정보를 입력받는 컴포넌트이다. 
# Code Analysis: 코드 1개(약 5~15줄)를 선택하여 동작 원리 설명
-   function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
체크박스에 체크한 항목의 id를 받아 새로운 배열을 만들고  if (id === task.id) 로 사용자가 선택한 항목만 선택 이후 나머지는 유지하면서 complted만 !로 변경 이후 react에 변경된 상태 등록후 화면에 표시