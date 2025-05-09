# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for HDAdvisors, an affordable housing consulting organization. The website is built using Quarto, a publishing system that allows for embedding R, Python, and other executable code with Markdown.

## Build and Development Commands

- **Render the website:** `quarto render` 
  - This compiles all .qmd files to HTML in the docs/ directory
  - The output directory is configured in _quarto.yml

- **Preview the website locally:** `quarto preview`
  - This starts a local server and automatically refreshes when changes are made

- **Create a new page:** 
  1. Create a new .qmd file in the root directory
  2. Add the page to the navbar in _quarto.yml if needed

## Architecture

- **Technology Stack:**
  - Quarto for static site generation
  - R/RStudio as the development environment
  - GitHub Pages for hosting (using the docs/ directory)

- **Content Structure:**
  - Each page is defined by a .qmd file in the root directory
  - The site configuration is in _quarto.yml
  - The site is styled using the Cosmo theme with custom CSS in styles.css

- **File Organization:**
  - .qmd files: Source content files with Markdown and optional executable code blocks
  - docs/: Generated HTML site (don't edit directly)
  - _quarto.yml: Site configuration (navigation, theme, output settings)