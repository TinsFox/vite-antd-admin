const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a pages',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'pages name please',
      validate: notEmpty('name'),
    },
  ],
  actions: (data) => {
    const name = '{{name}}';
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/index.tsx`,
        templateFile: 'plop-templates/page/index.hbs',
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
