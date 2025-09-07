'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Play, BookOpen, CheckCircle2, Circle } from 'lucide-react';
import { topics } from '../data/topics';
import Footer from './Footer';

const TopicsPage = ({ completedProblems, onToggleComplete }) => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'EASY': return 'text-green-600 bg-green-100';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100';
      case 'HARD': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Checks if ALL subtopics in a topic are completed
const isTopicCompleted = (topic) => {
  if (topic.subtopics.length === 0) return false;
  return topic.subtopics.every(subtopic => completedProblems[subtopic.id]);
};

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Topics</h2>
        <p className="text-gray-600">Explore these exciting topics!</p>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className="bg-cyan-400 text-white p-4 flex items-center justify-between cursor-pointer hover:bg-cyan-500 transition duration-200"
              onClick={() => toggleTopic(topic.id)}
            >
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold">{topic.name}</h3>
                {topic.pending && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {isTopicCompleted(topic) ? "Done":"Pending"}
                  </span>
                )}
              </div>
              {expandedTopics[topic.id] ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            {expandedTopics[topic.id] && topic.subtopics.length > 0 && (
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Sub Topics</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-2">✓</th>
                        <th className="text-left py-2 px-4">Name</th>
                        <th className="text-left py-2 px-4">LeetCode Link</th>
                        <th className="text-left py-2 px-4">YouTube Link</th>
                        <th className="text-left py-2 px-4">Article Link</th>
                        <th className="text-left py-2 px-4">Level</th>
                        <th className="text-left py-2 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topic.subtopics.map((subtopic) => (
                        <tr key={subtopic.id} className="border-b hover:bg-white transition duration-200">
                          <td className="py-3 px-2">
                            <button
                              onClick={() => onToggleComplete(subtopic.id)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              {completedProblems[subtopic.id] ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              ) : (
                                <Circle className="w-5 h-5" />
                              )}
                            </button>
                          </td>
                          <td className="py-3 px-4 font-medium">{subtopic.name}</td>
                          <td className="py-3 px-4">
                            <a
                              href={subtopic.leetcodeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                            >
                              <span>Practice</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <a
                              href={subtopic.youtubeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                            >
                              <Play className="w-4 h-4" />
                              <span>Watch</span>
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <a
                              href={subtopic.articleLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                            >
                              <BookOpen className="w-4 h-4" />
                              <span>Read</span>
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(subtopic.level)}`}>
                              {subtopic.level}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-green-600 font-medium">{completedProblems[subtopic.id] ?"Done":  subtopic.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default TopicsPage;