export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    year: '2024',
    description: 'Modern e-commerce solution with microservices architecture',
    longDescription: 'A comprehensive e-commerce platform built with modern microservices architecture, featuring real-time inventory management, advanced analytics, and seamless payment integration.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'Stripe'],
    image: '01',
    problemStatement: 'Traditional e-commerce platforms often struggle with scalability issues, poor user experience, and limited customization options. Small to medium businesses need a flexible, fast, and cost-effective solution that can grow with their business while providing enterprise-level features.',
    solution: [
      'Implemented microservices architecture for better scalability and maintainability',
      'Created a responsive, mobile-first design with optimized user experience',
      'Integrated real-time inventory management with automated stock updates',
      'Built comprehensive admin dashboard with advanced analytics and reporting',
      'Implemented secure payment processing with multiple payment gateways'
    ],
    features: [
      'Real-time inventory management with automatic stock updates',
      'Advanced product search and filtering with AI-powered recommendations',
      'Multi-vendor marketplace support with individual seller dashboards',
      'Comprehensive analytics dashboard with sales insights and customer behavior tracking',
      'Mobile-responsive design with Progressive Web App (PWA) capabilities',
      'Secure payment processing with support for multiple payment methods'
    ],
    challenges: [
      {
        problem: 'Database performance degradation with increasing product catalog size and concurrent users',
        solution: 'Implemented database indexing strategies, query optimization, and Redis caching layer for frequently accessed data'
      },
      {
        problem: 'Complex state management across multiple microservices leading to data inconsistency',
        solution: 'Adopted event-driven architecture with Apache Kafka for reliable inter-service communication and implemented eventual consistency patterns'
      },
      {
        problem: 'Payment processing failures causing poor user experience and lost sales',
        solution: 'Implemented retry mechanisms, payment status webhooks, and fallback payment methods with comprehensive error handling'
      }
    ],
    results: [
      {
        metric: 'Page Load Speed',
        value: '< 2s',
        description: 'Average page load time improved by 60%'
      },
      {
        metric: 'Conversion Rate',
        value: '+35%',
        description: 'Increase in sales conversion rate'
      },
      {
        metric: 'User Satisfaction',
        value: '4.8/5',
        description: 'Average user rating from customer feedback'
      }
    ],
    timeline: '6 months',
    teamSize: '4 developers',
    role: 'Full-Stack Lead Developer',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    images: ['Screenshot 1', 'Screenshot 2', 'Architecture Diagram', 'Mobile View']
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    category: 'Frontend',
    year: '2024',
    description: 'Real-time trading dashboard with advanced analytics',
    longDescription: 'A sophisticated financial dashboard providing real-time market data, advanced charting capabilities, and portfolio management tools for professional traders and investment firms.',
    tech: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'Material-UI', 'Redux Toolkit'],
    image: '02',
    problemStatement: 'Financial professionals need access to real-time market data with advanced visualization tools that can handle large datasets efficiently. Existing solutions are either too expensive, lack customization, or have poor performance with real-time data updates.',
    solution: [
      'Built real-time data visualization using WebSocket connections for live market feeds',
      'Created custom charting components with D3.js for advanced technical analysis',
      'Implemented efficient state management for handling large datasets',
      'Designed responsive interface that works seamlessly across different screen sizes',
      'Added comprehensive portfolio tracking with performance analytics'
    ],
    features: [
      'Real-time stock price updates with WebSocket connectivity',
      'Advanced charting with technical indicators and drawing tools',
      'Portfolio management with performance tracking and risk analysis',
      'Customizable watchlists with alerts and notifications',
      'Market news integration with sentiment analysis',
      'Export capabilities for reports and data analysis'
    ],
    challenges: [
      {
        problem: 'Handling high-frequency real-time data updates without performance degradation',
        solution: 'Implemented efficient data throttling, virtual scrolling, and selective re-rendering strategies using React.memo and useMemo hooks'
      },
      {
        problem: 'Complex chart interactions and overlays causing memory leaks',
        solution: 'Created proper cleanup mechanisms for D3.js components and implemented efficient event listener management'
      },
      {
        problem: 'Cross-browser compatibility issues with advanced CSS features and WebSocket connections',
        solution: 'Added progressive enhancement strategies and implemented fallback mechanisms for older browsers'
      }
    ],
    results: [
      {
        metric: 'Data Processing',
        value: '10k+',
        description: 'Real-time data points processed per second'
      },
      {
        metric: 'User Engagement',
        value: '+150%',
        description: 'Increase in daily active users'
      },
      {
        metric: 'Performance',
        value: '99.9%',
        description: 'Uptime with real-time data feeds'
      }
    ],
    timeline: '4 months',
    teamSize: '3 developers',
    role: 'Frontend Lead Developer',
    githubUrl: 'https://github.com/username/financial-dashboard',
    liveUrl: 'https://trading-dashboard-demo.vercel.app',
    images: ['Dashboard Overview', 'Chart Analysis', 'Portfolio View', 'Mobile Interface']
  },
  {
    id: 3,
    title: 'API Gateway',
    category: 'Backend',
    year: '2023',
    description: 'Scalable API gateway with automated deployment',
    longDescription: 'A high-performance API gateway solution designed for microservices architecture, featuring intelligent routing, rate limiting, authentication, and comprehensive monitoring capabilities.',
    tech: ['Node.js', 'Express', 'Redis', 'Kubernetes', 'Docker', 'Prometheus', 'GraphQL'],
    image: '03',
    problemStatement: 'As microservices architectures grow, managing multiple APIs becomes complex. Organizations need a centralized gateway that can handle routing, authentication, rate limiting, and monitoring while maintaining high performance and availability.',
    solution: [
      'Developed a centralized API gateway with intelligent request routing',
      'Implemented comprehensive authentication and authorization mechanisms',
      'Added advanced rate limiting and throttling capabilities',
      'Created monitoring and analytics dashboard for API performance tracking',
      'Built automated deployment pipeline with Kubernetes integration'
    ],
    features: [
      'Intelligent request routing with load balancing across multiple services',
      'Multi-layer authentication with JWT, OAuth2, and API key support',
      'Advanced rate limiting with customizable rules per client or endpoint',
      'Real-time monitoring with performance metrics and health checks',
      'Automated failover and circuit breaker patterns for high availability',
      'GraphQL federation support for unified API access'
    ],
    challenges: [
      {
        problem: 'High latency when routing requests through multiple middleware layers',
        solution: 'Optimized middleware pipeline with async processing and implemented connection pooling for database and Redis connections'
      },
      {
        problem: 'Memory leaks during high-traffic periods causing system instability',
        solution: 'Implemented proper resource cleanup, memory profiling, and horizontal scaling with Kubernetes auto-scaling'
      },
      {
        problem: 'Complex configuration management across different environments',
        solution: 'Created configuration management system with environment-specific overrides and validation schemas'
      }
    ],
    results: [
      {
        metric: 'Request Throughput',
        value: '50k/sec',
        description: 'Maximum requests handled per second'
      },
      {
        metric: 'Latency Reduction',
        value: '-40%',
        description: 'Average response time improvement'
      },
      {
        metric: 'System Uptime',
        value: '99.99%',
        description: 'Service availability with automated failover'
      }
    ],
    timeline: '5 months',
    teamSize: '2 developers',
    role: 'Backend Architect',
    githubUrl: 'https://github.com/username/api-gateway',
    liveUrl: 'https://api-gateway-docs.vercel.app',
    images: ['Architecture Diagram', 'Monitoring Dashboard', 'Performance Metrics', 'Configuration Panel']
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile',
    year: '2023',
    description: 'Secure banking application with biometric authentication',
    longDescription: 'A comprehensive mobile banking application featuring advanced security measures, intuitive user interface, and seamless integration with banking systems for a complete digital banking experience.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth', 'Stripe Connect'],
    image: '04',
    problemStatement: 'Traditional banking apps often lack user-friendly interfaces and advanced security features. Customers need a secure, fast, and intuitive mobile banking experience that provides all essential banking services while ensuring maximum security and privacy.',
    solution: [
      'Developed cross-platform mobile app with React Native for iOS and Android',
      'Implemented multi-factor authentication with biometric verification',
      'Created intuitive user interface with accessibility-first design principles',
      'Built secure transaction processing with end-to-end encryption',
      'Integrated comprehensive account management and financial planning tools'
    ],
    features: [
      'Biometric authentication with fingerprint and face recognition',
      'Real-time account balance and transaction history with instant notifications',
      'Secure money transfers with QR code scanning and contact integration',
      'Bill payment automation with scheduled and recurring payment options',
      'Investment portfolio tracking with market insights and recommendations',
      'AI-powered spending analytics with budgeting tools and financial insights'
    ],
    challenges: [
      {
        problem: 'Ensuring PCI DSS compliance and meeting banking security standards',
        solution: 'Implemented end-to-end encryption, secure key storage, and regular security audits with penetration testing'
      },
      {
        problem: 'Maintaining consistent performance across different mobile devices and operating systems',
        solution: 'Optimized app performance with efficient state management, image optimization, and implemented progressive loading strategies'
      },
      {
        problem: 'Integrating with legacy banking systems while maintaining modern user experience',
        solution: 'Created API abstraction layer with proper error handling and implemented offline-first architecture with data synchronization'
      }
    ],
    results: [
      {
        metric: 'User Adoption',
        value: '85%',
        description: 'Of customers actively using mobile app'
      },
      {
        metric: 'Transaction Success',
        value: '99.8%',
        description: 'Successful transaction completion rate'
      },
      {
        metric: 'Security Score',
        value: 'A+',
        description: 'Security rating from independent audit'
      }
    ],
    timeline: '8 months',
    teamSize: '5 developers',
    role: 'Mobile App Lead Developer',
    githubUrl: 'https://github.com/username/mobile-banking',
    liveUrl: 'https://banking-app-demo.vercel.app',
    images: ['Login Screen', 'Dashboard View', 'Transaction Flow', 'Settings Panel']
  }
]