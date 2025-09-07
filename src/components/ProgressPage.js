import { topics } from "../data/topics";
import Footer from "./Footer";

const ProgressPage = ({ completedProblems }) => {
  const getProgressData = () => {
    let total = { easy: 0, medium: 0, hard: 0 };
    let done = { easy: 0, medium: 0, hard: 0 };

    topics.forEach((topic) => {
      topic.subtopics.forEach((sub) => {
        const level = sub.level.toLowerCase();
        if (["easy", "medium", "hard"].includes(level)) {
          total[level] += 1;
          if (completedProblems[sub.id]) {
            done[level] += 1;
          }
        }
      });
    });

    return {
      easy: total.easy ? Math.round((done.easy / total.easy) * 100) : 0,
      medium: total.medium ? Math.round((done.medium / total.medium) * 100) : 0,
      hard: total.hard ? Math.round((done.hard / total.hard) * 100) : 0,
    };
  };

  const progress = getProgressData();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Progress Reports</h2>
      <div className="space-y-3">
        <div className="text-lg">
          <span className="font-medium text-green-600">Easy: </span>
          <span className="text-gray-700">{progress.easy}%</span>
        </div>
        <div className="text-lg">
          <span className="font-medium text-yellow-600">Medium: </span>
          <span className="text-gray-700">{progress.medium}%</span>
        </div>
        <div className="text-lg">
          <span className="font-medium text-red-600">Hard: </span>
          <span className="text-gray-700">{progress.hard}%</span>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProgressPage;