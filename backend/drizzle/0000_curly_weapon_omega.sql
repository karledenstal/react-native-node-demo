CREATE TABLE `articles` (
	`id` text,
	`author` text,
	`body` text,
	`title` text,
	`publishedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
