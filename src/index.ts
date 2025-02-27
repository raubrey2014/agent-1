import { mastra } from './mastra';

async function main() {
  console.log('Initializing Mastra...');
  const agent = mastra.getAgent('weatherAgent');

  console.log('Mastra initialized, got the agent');
  const result = await agent.generate("What's the weather in boston?");
  console.log('Agent generated a response');
  console.log(result.response.messages[result.response.messages.length - 1].content);
}

main();
