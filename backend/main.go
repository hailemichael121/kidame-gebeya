package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "API is up and running!",
		})
	})

	r.Run(":8080") // Start server on port 8080
}
