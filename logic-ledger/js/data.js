/* =========================================================
   LOGIC LEDGER — CONTENT DATA
   Add a new algorithm/project/note by adding one object below.
   Nothing else needs to change — the render-*.js files build
   the cards from these arrays automatically.

   status: 'done' | 'learning' | 'upcoming'
   =========================================================
*/

const ALGORITHMS = [
  {
    id: "linear-regression",
    name: "Linear Regression",
    status: "done",
    description: "Predicting continuous targets by fitting the best straight line through the data — cost functions, gradient descent, and regularization.",
    repo: "https://github.com/cyraemin/linear-regression",
    notes: "assets/notes/linear-regression-notes.pdf"
  },
  {
    id: "logistic-regression",
    name: "Logistic Regression",
    status: "done",
    description: "Classification via the sigmoid function — decision boundaries, log-loss, and evaluation metrics like precision/recall.",
    repo: "https://github.com/cyraemin/classification-algorithms",
    notes: "assets/notes/logistic-regression-notes.pdf"
  },
  {
    id: "decision-trees",
    name: "Decision Trees",
    status: "done",
    description: "Recursive partitioning of feature space using entropy and information gain to choose the root node and split on the most informative features.",
    repo: "https://github.com/cyraemin/classification-algorithms",
    notes: "assets/notes/decision-trees-and-svm-notes.pdf"
  },
  {
    id: "knn",
    name: "K-Nearest Neighbors",
    status: "done",
    description: "Instance-based learning that classifies a point by the majority vote of its closest neighbors, for both classification and regression.",
    repo: "https://github.com/cyraemin/classification-algorithms",
    notes: "assets/notes/knn-notes.pdf"
  },
  {
    id: "svm",
    name: "Support Vector Machines",
    status: "done",
    description: "Finding the maximum-margin hyperplane, with kernel tricks for non-linearly separable data.",
    repo: "https://github.com/cyraemin/classification-algorithms",
    notes: "assets/notes/decision-trees-and-svm-notes.pdf"
  },
  {
    id: "naive-bayes",
    name: "Naive Bayes",
    status: "done",
    description: "Probabilistic classification built on Bayes' theorem with a (naive) feature-independence assumption.",
    repo: "https://github.com/cyraemin/classification-algorithms",
    notes: "assets/notes/naive-bayes-notes.pdf"
  },
  {
    id: "ensemble-learning",
    name: "Ensemble Learning",
    status: "done",
    description: "Combining multiple weak learners — bagging, boosting, and stacking — into a stronger predictor. Includes Random Forest, implemented here as bagged decision trees rather than as a separate notebook.",
    repo: "https://github.com/cyraemin/Grid-Search-CV",
    notes: "assets/notes/model-tuning-grid-search-cv-ensemble-learning-notes.pdf"
  },
  {
    id: "grid-search-cv",
    name: "Grid Search CV",
    status: "done",
    description: "Systematic hyperparameter tuning with cross-validation to avoid overfitting to a single train/test split.",
    repo: "https://github.com/cyraemin/Grid-Search-CV",
    notes: "assets/notes/model-tuning-grid-search-cv-ensemble-learning-notes.pdf"
  },
  {
    id: "pca",
    name: "PCA",
    status: "upcoming",
    description: "Dimensionality reduction by projecting data onto the directions of maximum variance.",
    repo: null,
    notes: null
  },
  {
    id: "clustering",
    name: "Clustering",
    status: "upcoming",
    description: "Unsupervised grouping of data — K-Means, hierarchical clustering, and choosing the right number of clusters.",
    repo: null,
    notes: null
  }
];

const PROJECTS = [
  {
    id: "linear-regression-project",
    name: "Linear Regression — Car Price Prediction",
    description: "Predictive modeling project using Linear Regression. Includes EDA, feature engineering, training and evaluation.",
    tags: ["Linear Regression", "EDA", "Regression"],
    repo: "https://github.com/cyraemin/linear-regression",
    gallery: []
  },
  {
    id: "classification-algorithms",
    name: "Classification Algorithms",
    description: "Working notebooks for Logistic Regression, Decision Trees, KNN, SVM and Naive Bayes, including the Titanic survival dataset.",
    tags: ["Logistic Regression", "Decision Trees", "Classification"],
    repo: "https://github.com/cyraemin/classification-algorithms",
    gallery: []
  },
  {
    id: "ml-foundation",
    name: "ML Foundation",
    description: "Core notebooks covering foundational machine learning workflows across the heart disease and insurance datasets.",
    tags: ["Foundations", "EDA"],
    repo: "https://github.com/cyraemin/ml-foundation",
    gallery: []
  },
  {
    id: "ml-project-1",
    name: "ML Project 1",
    description: "End-to-end classification project with saved model artifacts — trained scaler, pickled model, and a small serving app.",
    tags: ["Classification", "Deployment"],
    repo: "https://github.com/cyraemin/ml-project-1",
    gallery: []
  },
  {
    id: "grid-search-cv-project",
    name: "Grid Search CV & Ensemble Learning",
    description: "Hyperparameter tuning with GridSearchCV and ensemble methods, benchmarked on the Iris dataset.",
    tags: ["Grid Search CV", "Ensemble Learning"],
    repo: "https://github.com/cyraemin/Grid-Search-CV",
    gallery: []
  }
];

const NOTES = [
  {
    topic: "Linear Regression",
    description: "Concepts, intuition, mathematics and implementation.",
    file: "assets/notes/linear-regression-notes.pdf"
  },
  {
    topic: "Logistic Regression",
    description: "Sigmoid function, decision boundaries, log-loss and classification metrics.",
    file: "assets/notes/logistic-regression-notes.pdf"
  },
  {
    topic: "Decision Trees & SVM",
    description: "Entropy, information gain, root-node selection, and support vector machines.",
    file: "assets/notes/decision-trees-and-svm-notes.pdf"
  },
  {
    topic: "K-Nearest Neighbors",
    description: "Choosing K, distance metrics, and classification vs. regression use.",
    file: "assets/notes/knn-notes.pdf"
  },
  {
    topic: "Naive Bayes",
    description: "Bayes' theorem, independent vs. dependent events, and the naive independence assumption.",
    file: "assets/notes/naive-bayes-notes.pdf"
  },
  {
    topic: "Model Tuning, Grid Search CV & Ensemble Learning",
    description: "Hyperparameter tuning, cross-validation, bagging, boosting, stacking and random forests.",
    file: "assets/notes/model-tuning-grid-search-cv-ensemble-learning-notes.pdf"
  }
];

const ROADMAP = [
  "Python", "Statistics", "Probability", "NumPy", "Pandas",
  "Data Visualization", "Exploratory Data Analysis",
  "Machine Learning", "Deep Learning", "Model Deployment"
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/cyraemin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tamsil-sameera-32873a3ba" },
  { label: "Gmail", href: "mailto:tamsilsamira@gmail.com" }
];
