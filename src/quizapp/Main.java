package quizapp;

public class Main {
    public static void main(String[] args) {
        // Create a new QuestionService object
        QuestionService questionService = new QuestionService();

        // Add the question to the service
        questionService.addQuestion(new Question(1, "2 + 2", "1", "2", "3", "4", "4"));
        questionService.addQuestion(new Question(2, "3 + 5", "6", "7", "8", "9", "8"));
        questionService.addQuestion(new Question(3, "5 + 5", "9", "10", "11", "12", "10"));
        questionService.addQuestion(new Question(4, "10 - 2", "7", "8", "9", "10", "8"));
        questionService.addQuestion(new Question(5, "6 * 7", "41", "42", "43", "44", "42"));

        // Retrieve and print the question
        System.out.println("Welcome to the Quiz!");
        int score = questionService.conductQuiz();
        System.out.println("Your score is: " + score + " out of " + questionService.getTotalQuestions());
        System.out.println("Thank you for playing!");
    }
}