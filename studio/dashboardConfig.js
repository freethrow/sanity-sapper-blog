export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fad7c790a1a8b6d10ecccf8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-oaau3g42',
                  apiId: '2893dcf6-7513-4b20-9540-3b9b1e0e6bbf'
                },
                {
                  buildHookId: '5fad7c790a2d436a8e1611b3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-1ndeihhp',
                  apiId: 'cd4c1efb-ede1-4be1-a586-7ff4b4ced410'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freethrow/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-1ndeihhp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
