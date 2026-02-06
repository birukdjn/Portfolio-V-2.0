"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GitBranch, GitCommit, ExternalLink, Globe, Star, Eye, GitFork, Loader2, Database } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchGitHubProjects } from "../../Data/projectsData";

const ProjectImageCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative h-45 w-full overflow-hidden bg-slate-900/50">
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`Project screenshot ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        unoptimized
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};


export default function ProjectsPage() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchGitHubProjects();
            setProjects(data);
            setLoading(false);
        };
        getProjects();
    }, []);


    return (
        <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-float-fast delay-500"></div>

                {/* Git-inspired Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Animated Code-like Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
                            initial={{
                                opacity: 0,
                                x: Math.random() * 1000,
                                y: Math.random() * 1000
                            }}
                            animate={{
                                opacity: [0, 0.5, 0],
                                y: [0, -80],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-xl mx-auto">
                        A curated collection of my open-source contributions and personal projects. Live data synced directly from my GitHub repositories
                    </p>
                </motion.div>
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                        <p className="text-indigo-300 font-mono text-sm animate-pulse">Fetching repositories...</p>
                    </div>
                ) : (
                    < div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />

                                {/* Project Card */}
                                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-indigo-400/50 h-full flex flex-col">
                                    {/* Image and Branch Info Container */}
                                    <div className="relative">
                                        {/* Animated Image Carousel */}
                                        <ProjectImageCarousel images={project.images} />
                                        {/* Branch Info Overlay */}
                                        <div className="absolute top-2 right-2 flex items-center space-x-1 bg-slate-700/50 px-2 py-1 rounded-full z-10">
                                            <GitBranch className="w-3 h-3 text-indigo-400" />
                                            <span className="text-xs text-indigo-300 font-mono">{project.branch}</span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-1 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="p-4 bg-slate-900/30 border-y border-indigo-500/20">
                                        <div className="flex justify-between items-center text-xs text-gray-400">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-3 h-3 text-yellow-400" />
                                                    <span>{project.stars}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <GitFork className="w-3 h-3 text-blue-400" />
                                                    <span>{project.forks}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-3 h-3 text-green-400" />
                                                    <span>{project.watches}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <GitCommit className="w-3 h-3 text-purple-400" />
                                                    <span>{project.commits}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Database className="w-3 h-3 text-purple-400" />
                                                    <span>{project.size} KB</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-2 h-2 rounded-full ${project.languageColor}`}></div>
                                                <span className="font-mono">{project.language}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Metadata */}
                                    <div className="p-4 flex-1">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/20 hover:bg-indigo-800/40 transition-colors font-mono"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Last Commit Info */}
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <div className="flex items-center space-x-1">
                                                <GitCommit className="w-3 h-3 text-green-400" />
                                                <span className="font-mono">Last commit:</span>
                                                <span>{project.lastCommit}</span>
                                            </div>
                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'stable' ? 'bg-green-500/20 text-green-400' :
                                                project.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                                                    project.status === 'feature' ? 'bg-purple-500/20 text-purple-400' :
                                                        'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {project.status}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons - Updated to Repository URL and Live Demo */}
                                    <div className="p-4 border-t border-indigo-500/20">
                                        <div className="flex space-x-3">
                                            <Link
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-700/60 hover:bg-slate-600/60 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/repo border border-indigo-500/20 hover:border-indigo-400/40"
                                            >
                                                <GitBranch className="w-4 h-4 group-hover/repo:text-blue-400 transition-colors" />
                                                <span>Repository</span>
                                            </Link>
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/live shadow-lg hover:shadow-xl"
                                            >
                                                <Globe className="w-4 h-4 group-hover/live:scale-110 transition-transform" />
                                                <span>Live Demo</span>
                                                <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="https://github.com/birukdjn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
                    >
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <GitBranch className="w-5 h-5 relative" />
                        <span className="relative">View All on GitHub</span>
                        <ExternalLink className="w-4 h-4 relative" />
                    </Link>


                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center space-x-8 mt-8 text-gray-400"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-400">{projects.length}+</div>
                            <div className="text-sm">Active Repositories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {projects.reduce((total, proj) => total + proj.stars, 0)}+
                            </div>
                            <div className="text-sm">Total Stars</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {projects.reduce((total, proj) => total + (parseInt(proj.commits) || 0), 0)}+
                            </div>
                            <div className="text-sm">Total Commits</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {projects.reduce((total, proj) => total + proj.forks, 0)}+
                            </div>
                            <div className="text-sm">Total Forks</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
