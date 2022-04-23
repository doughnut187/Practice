/*
	This program will ask a math question and give a hint after 5 seconds

	This is for practice on sending signals between processes
*/
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>

// global variable for answer
int x = 0;

// on sigusr1 signal give hint if x is still 0 (user hasnt answered)
void onusr1(int sig) {
	if(x == 0){
		printf("\nHint: it rhymes with more!\n");
	}
}

int main(int argc, char* argv[]) {

	// create the child process
	int pid = fork();
	// return with error if fork fails
	if(pid == -1) {
		fprintf(stderr, "failed fork\n");
		return 0;
	}

	// if child process sleep for 5 seconds before sending sigusr1 signal to parent
	if(pid == 0) {
		sleep(5);
		kill(getppid(), SIGUSR1);
	}else {
		// parent process
		struct sigaction sa = {0}; 
		sa.sa_flags = SA_RESTART; // restart for scanf
		sa.sa_handler = &onusr1; // tie onusr1 to sigusr1 signal
		sigaction(SIGUSR1, &sa, NULL); 

		// ask math question
		printf("What is 2+2?  ");
		scanf("%d", &x);
		if(x == 4) {
			printf("CORRECT!\n");
		} else {
			printf("WRONG!\n");
		}
	}
	wait(NULL);
	return 1;
}
