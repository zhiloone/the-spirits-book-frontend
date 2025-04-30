import { QuestionsClient } from "@/api/questions/questions.client";
import { QuestionModel } from "@/api/questions/questions.types";
import { getCurrentDateString } from "@/utils";
import { Container, Title, Text, Paper, Loader, Center, Stack, Divider, Box, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

const fetchQuestionOfTheDay = async (): Promise<QuestionModel> => {
  const client = new QuestionsClient();
  return client.getQuestionOfTheDay();
};

export const QuestionOfTheDayPage = () => {
  const { data: questionOfTheDay, isLoading } = useQuery({
    queryKey: ["daily-question"],
    queryFn: fetchQuestionOfTheDay,
  });

  const currentDate = getCurrentDateString("pt-BR");  // DD/MM/YYYY

  if (isLoading) {
    return (
      <Center h="calc(100vh - 160px)">
        <Loader size="lg" />
      </Center>
    );
  }

  if (!questionOfTheDay) {
    return <Center>Pergunta não encontrada.</Center>;
  }

  return (
    <Container size="sm" py="xl">
      <Title order={1} ta="center" c="black">
        Pergunta do Dia - {currentDate}
      </Title>

      <Paper
        withBorder
        shadow="md"
        p="lg"
        my="xl"
        radius="md"
      >
        <Stack gap="md">
          <Title ta="center" c="gray" fs="italic">
            {questionOfTheDay.part}
          </Title>

          <Title order={2} ta="center" c="gray">
            {questionOfTheDay.chapter}
          </Title>

          <Title order={3} ta="center" c="black">
            {questionOfTheDay.section}
          </Title>
        </Stack>

        <Divider my="md" />

        <Flex dir="row" align="initial" gap="xl">
          <Text fw="bold">
            {questionOfTheDay.id}.
          </Text>

          <Stack gap="xs">
            {questionOfTheDay.questions.map((q, idx) => (
              <div key={idx}>
                {q.question?.map((qText, i) => (
                  <Text key={i} fw="normal" fs="italic" size="md">
                    {q.letter && (
                      <Text component="span" fs="normal" size="md" fw="bold">
                        {q.letter}{") "}
                      </Text>
                    )}
                    {qText}
                  </Text>
                ))}

                {q.answer.map((aText, i) => (
                  <Text key={i} size="md">
                    {aText}
                  </Text>
                ))}

                {q.authors && (
                  <Text size="md" fs="italic" ta="end">
                    {q.authors.join(", ")}
                  </Text>
                )}
              </div>
            ))}

            {questionOfTheDay.comment && (
              <Box ml="xl" mt="sm">
                {questionOfTheDay.comment.map((c, i) => (
                  <Text key={i} size="sm" style={{}}>
                    {c}
                  </Text>
                ))}
              </Box>
            )}
          </Stack>
        </Flex>
      </Paper>
    </Container>
  )
};
