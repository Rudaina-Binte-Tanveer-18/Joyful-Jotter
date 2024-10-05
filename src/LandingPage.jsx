import React from "react";
import { ListItem, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ChakraProvider, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import imageGenerator from "./assets/imageGenerator.jpeg";
import poster from "./assets/homee.png";
import taskk from "./assets/taskk.jpeg";
import chatbot from "./assets/chatbot.jpeg";
import notes from "./assets/notes.jpeg";
import "./App.css"

const LandingPage = () => {
  return (
    <ChakraProvider>
      <Box
        style={{
          background: "linear-gradient(135deg, #E27396 0%, #EA9AB2 25%, #EFCFE3 50%, #EAF2D7 75%, #B3DEE2 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box className="py-16 px-8 text-center">
            <Heading className="text-white text-5xl font-bold">
              Welcome to <span className="text-lime-300">JOYFULJOTTER!</span>
            </Heading>
            <Text className="text-2xl text-teal-200 mt-4">
              Power your day with AI-driven task management and creative tools.
            </Text>
            <Image
              mt="8"
              borderRadius="lg"
              boxShadow="xl"
              mx="auto"
              src={poster}
              alt="App Demo"
              className="transform transition-transform duration-300 hover:scale-105"
            />
          </Box>
        </motion.div>

        {/* Features Section */}
        <Stack spacing={10} py="16" px="8" align="center">
          <Heading className="text-4xl text-fuchsia-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            Features
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            {/* Feature 1: Task Manager */}
            <Box
              textAlign="center"
              maxW="xs"
              className="bg-white rounded-lg shadow-lg p-4 transition duration-300 hover:shadow-2xl"
              style={{ borderColor: "#B3DEE2", borderWidth: "2px" }}
            >
              <Image
                src={taskk}
                alt="Task Icon"
                mb="4"
                className="mx-auto"
              />
              <Heading
                size="md"
                className="text-lg font-semibold"
                style={{ color: "#E27396" }}
              >
                Organize Your Life
              </Heading>
              <Text mt="2" className="text-gray-700">
                Manage tasks efficiently by day, month, or year with an intuitive dashboard.
              </Text> <br/>
              <Button
                as={RouterLink}
                to="./TaskManager"
                className="mt-4 bg-purple-400 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:bg-lime-200 hover:scale-105 hover:text-lime-800 shadow-md hover:shadow-lg"
              >
                Try Task Manager
              </Button>
            </Box>

            {/* Feature 2: AI Image Generator */}
            <Box
              textAlign="center"
              maxW="xs"
              className="bg-white rounded-lg shadow-lg p-4 transition duration-300 hover:shadow-2xl"
              style={{ borderColor: "#EAF2D7", borderWidth: "2px" }}
            >
              <Image
                src={imageGenerator}
                alt="AI Image"
                mb="4"
                className="mx-auto"
              />
              <Heading
                size="md"
                className="text-lg font-semibold"
                style={{ color: "#EA9AB2" }}
              >
                Unleash Your Creativity
              </Heading>
              <Text mt="2" className="text-gray-700">
                Generate AI-powered images that bring your imagination to life.
              </Text>  <br/>
              <Button
                as={RouterLink}
                to="/AiImageGenerator"
                className="mt-4 bg-purple-400 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:bg-lime-200 hover:scale-105 hover:text-lime-800 shadow-md hover:shadow-lg"
              >
                Try Image Generator
              </Button>
            </Box>

            {/* Feature 3: AI Chatbot */}
            <Box
              textAlign="center"
              maxW="xs"
              className="bg-white rounded-lg shadow-lg p-4 transition duration-300 hover:shadow-2xl"
              style={{ borderColor: "#EFCFE3", borderWidth: "2px" }}
            >
              <Image
                src={chatbot}
                alt="Chatbot Icon"
                mb="4"
                className="mx-auto"
              />
              <Heading
                size="md"
                className="text-lg font-semibold"
                style={{ color: "#E27396" }}
              >
                Smart Conversations
              </Heading>
              <Text mt="2" className="text-gray-700">
                Chat with an AI assistant to manage tasks, answer questions, and more.
              </Text>  <br/>
              <Button
                as={RouterLink}
                to="./AiChatBot"
                className="mt-4 bg-purple-400 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:bg-lime-200 hover:scale-105 hover:text-lime-800 shadow-md hover:shadow-lg"
              >
                Try AI Chatbot
              </Button>
            </Box>

            {/* Feature 4: Notes Taking */}
            <Box
              textAlign="center"
              maxW="xs"
              className="bg-white rounded-lg shadow-lg p-4 transition duration-300 hover:shadow-2xl"
              style={{ borderColor: "#EA9AB2", borderWidth: "2px" }}
            >
              <Image
                src={notes}
                alt="Notes Icon"
                mb="4"
                className="mx-auto"
              />
              <Heading
                size="md"
                className="text-lg font-semibold"
                style={{ color: "#8e3a59" }}
              >
                Capture Your Ideas
              </Heading>
              <Text mt="2" className="text-gray-700">
                Keep your thoughts, ideas, and tasks organized with ease in your personal notes section.
              </Text>  <br/>
              <Button
                as={RouterLink}
                to="./Notes"
                className="mt-4 bg-pink-400 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:bg-lime-200 hover:scale-105 hover:text-lime-800 shadow-md hover:shadow-lg"
              >
                Try Notes Taking
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default LandingPage;
