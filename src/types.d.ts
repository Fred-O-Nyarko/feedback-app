interface Feedback {
  id: number | string;
  text: string;
  rating: number;
}

interface FeedbackContext {
  feedback: Feedback[];
  addFeedback: (feedback: Feedback) => void;
  editFeedback: (feedback: Feedback) => void;
  deleteFeedback: (id: number | string) => void;
  updateFeedback: (id: number | string, feedback: Feedback) => void;
  isLoading: boolean;
  feedbackEdit: EditFeedback;
}

type EditFeedback = { item: Feedback; edit: boolean };
