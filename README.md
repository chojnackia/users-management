<p align="center">
  <h1 align="center">User Management System</h1>
  <p align="center">
    A full-stack user management system built with Next.js, NestJS, and PostgreSQL
  </p>
  <p align="center">
    <a href="https://turbo.build/repo">
      <img alt="Turborepo" src="https://img.shields.io/badge/powered%20by-turborepo-ffcc00?style=flat&labelColor=000000" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
    </a>
    <a href="https://nextjs.org/">
      <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" />
    </a>
    <a href="https://nestjs.com/">
      <img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white" />
    </a>
    <a href="https://www.postgresql.org/">
      <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" />
    </a>
    <a href="https://prisma.io/">
      <img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" />
    </a>
  </p>
</p>

## ✨ Features

- **Full-stack TypeScript**: Type safety from database to UI
- **Modern Frontend**: Built with Next.js 13+ App Router
- **Robust Backend**: Powered by NestJS with RESTful APIs
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication with refresh tokens
- **Monorepo**: Managed with Turborepo and pnpm workspaces
- **Code Quality**: Prettier, ESLint, and TypeScript
- **Testing**: Jest for unit and integration tests
- **Containerization**: Docker and Docker Compose for development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Docker and Docker Compose (for local development)
- PostgreSQL (or use Docker Compose)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/user-management.git
   cd user-management
   ```

2. **Install dependencies**
   ```bash
   # Install pnpm if you don't have it
   npm install -g pnpm@8.15.4
   
   # Install all dependencies
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Update the environment variables in .env as needed
   ```

4. **Start the development environment**
   ```bash
   # Start the database and other services
   docker-compose up -d
   
   # Run database migrations
   pnpm prisma:migrate
   
   # Start the development servers
   pnpm dev
   ```

5. **Access the applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Prisma Studio: http://localhost:5555

## 🏗 Project Structure

```
user-management/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   └── backend/           # NestJS backend application
├── packages/
│   ├── config/          # Shared configuration
│   └── types/             # Shared TypeScript types
├── docker/                # Docker configuration
├── .github/              # GitHub workflows
└── docker-compose.yml     # Development environment
```

## 🛠 Development

### Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Lint all code
- `pnpm test` - Run tests
- `pnpm prisma:generate` - Generate Prisma client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:studio` - Open Prisma Studio

### Code Style

This project uses:

- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code linting
- [TypeScript](https://www.typescriptlang.org/) for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Turborepo](https://turbo.build/)
- [pnpm](https://pnpm.io/)

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
