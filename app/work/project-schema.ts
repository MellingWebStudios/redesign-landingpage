/**
 * Project Schema
 *
 * This file documents the data structure for projects in the portfolio.
 * Use this as a reference when adding or modifying projects.
 */

export interface Project {
  /**
   * Unique identifier for the project
   */
  id: number

  /**
   * Project title
   */
  title: string

  /**
   * URL-friendly slug for the project
   */
  slug: string

  /**
   * URL to the main project image (high quality, larger size)
   */
  imageUrl: string

  /**
   * URL to the project thumbnail (optional, used in grid view)
   */
  thumbnailUrl?: string

  /**
   * Brief description of the project
   */
  description: string

  /**
   * Array of tags to categorize the project
   */
  tags: string[]

  /**
   * Array of technologies used in the project
   */
  technologies: string[]

  /**
   * Main category of the project (used for filtering)
   */
  category: "Websites" | "Apps" | string

  /**
   * Whether this is a featured project (shown in the featured section)
   */
  featured: boolean

  /**
   * When the project was completed
   */
  completionDate: string

  /**
   * Name of the client
   */
  clientName: string

  /**
   * URL to the live site (optional)
   */
  liveSiteUrl?: string | null

  /**
   * URL to the GitHub repository (optional)
   */
  githubUrl?: string | null

  /**
   * Key highlights or achievements of the project
   */
  highlights: string[]
}

/**
 * Example Project
 *
 * Use this as a template when adding new projects
 */
export const exampleProject: Project = {
  id: 0,
  title: "Project Title",
  slug: "project-slug",
  imageUrl: "/path/to/image.jpg",
  thumbnailUrl: "/path/to/thumbnail.jpg",
  description: "Brief description of the project.",
  tags: ["Tag1", "Tag2"],
  technologies: ["Tech1", "Tech2"],
  category: "Websites",
  featured: false,
  completionDate: "Month Year",
  clientName: "Client Name",
  liveSiteUrl: "https://example.com",
  githubUrl: "https://github.com/example/repo",
  highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
}
