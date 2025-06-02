import Image from 'next/image';

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="self-center">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <Typography variant="h3" className='text-center'>
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a full-stack developer and problem solver with a passion for building impactful products and delivering clean, maintainable code. My expertise lies in crafting seamless user experiences and building scalable, high-performance backend systems. I enjoy working on everything from design systems to API architecture.
          </Typography>
          <Typography>
            My core stack includes React, TypeScript, Node.js (NestJS), Tailwind CSS, and MongoDB. I have experience integrating third-party services, building RESTful APIs, working with Redux for state management, and optimizing frontend performance for speed and accessibility. On the backend, I focus on microservices, Dockerized deployments, CI/CD pipelines, and infrastructure on Azure.
          </Typography>
          <Typography>
            Beyond technical skills, I believe in developer empathy, continuous learning, and shipping products that make a difference. I enjoy working on projects that blend technology, design, and business logic into cohesive solutions.
          </Typography>
          <Typography>
            When I&apos;m not coding, I&apos;m often exploring DevOps practices, reading about system design, or contributing to open-source. I&apos;m also a fan of clean UI/UX design, staying active in the startup ecosystem, and mentoring budding developers.
          </Typography>
          <Typography>
            Here are a few of the technologies and tools I frequently work with:
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">React.js, Next.js, Redux Toolkit, TypeScript</Typography>
              <Typography component="li">NestJS, Node.js, Express.js</Typography>
              <Typography component="li">MongoDB, PostgreSQL, MySQL</Typography>
              <Typography component="li">TailWind CSS, Chakra UI, Material UI</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Docker, GitHub Actions, CI/CD pipelines</Typography>
              <Typography component="li">Azure Cloud, Kubernetes</Typography>
              <Typography component="li">Prometheus, Grafana, Loki for monitoring</Typography>
              <Typography component="li">REST APIs, WebSockets, Authentication & Authorization</Typography>
            </ul>
          </div>
          <Typography>
            I&apos;m always exploring ways to push my limits, learn new technologies, and contribute meaningfully to the community. Whether it&apos;s a collaborative team project, a solo build, or mentoring others, I&apos;m all in.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
