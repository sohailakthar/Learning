package quizapp;
import java.util.*;

public class QuestionService {
    private List<Question> questions;

    public QuestionService() {
        this.questions = new ArrayList<>();
    }

    public void addQuestion(Question question) {
        questions.add(question);
    }

    public int getTotalQuestions() {
        return questions.size();
    }

    public int conductQuiz() {
        Scanner scanner = new Scanner(System.in);
        int score = 0;

        for (Question question : questions) {
            System.out.println(question.getQuestion());
            System.out.println("1. " + question.getOption1());
            System.out.println("2. " + question.getOption2());
            System.out.println("3. " + question.getOption3());
            System.out.println("4. " + question.getOption4());
            System.out.print("Your answer (1-4): ");

            int choice = scanner.nextInt();

            String answer = "";
            switch (choice) {
                case 1:
                    answer = question.getOption1();
                    break;
                case 2:
                    answer = question.getOption2();
                    break;
                case 3:
                    answer = question.getOption3();
                    break;
                case 4:
                    answer = question.getOption4();
                    break;
                default:
                    System.out.println("Invalid choice. Please select a number between 1 and 4.");
                    continue; // Skip to the next question
            }

            if (question.getAnswer().equals(answer)) {
                score++;
                System.out.println("Correct!");
            } else {
                System.out.println("Wrong! The correct answer was: " + question.getAnswer());
            }
        }

        scanner.close();

        return score;
    }
}
