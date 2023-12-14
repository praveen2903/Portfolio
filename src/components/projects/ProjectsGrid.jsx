import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
    const {
        projects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Projects portfolio
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <h3
                    className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3"
                >
                    Search projects by title or filter by category
                </h3>
                <div className="sm:flex sm:justify-between sm:items-center mt-8">
                    <div className="sm:flex sm:gap-2">
                        <span
                            className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
                        >
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
                        </span>
                        <input
                            onChange={(e) => {
                                setSearchProject(e.target.value);
                            }}
                            className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                                border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
                            id="name"
                            name="name"
                            type="search"
                            required=""
                            placeholder="Search Projects"
                            aria-label="Name"
                        />
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <ProjectsFilter setSelectProject={setSelectProject} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {selectProject
                    ? selectProjectsByCategory.map((project) => (
                        <ProjectSingle
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            gitlink={project.gitlink}
                            deploylink={project.deploylink}
                            icons={project.icons}
                            key={project.id}
                        />
                    ))
                    : searchProject
                        ? searchProjectsByTitle.map((project) => (
                            <ProjectSingle
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                gitlink={project.gitlink}
                                deploylink={project.deploylink}
                                icons={project.icons}
                                key={project.id}
                            />
                        ))
                        : projects.map((project) => (
                            <ProjectSingle
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                gitlink={project.gitlink}
                                deploylink={project.deploylink}
                                icons={project.icons}
                                key={project.id}
                            />
                        ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;
