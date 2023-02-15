import Link from 'next/link';
import React from 'react'
import ContentLoader from './ContentLoader'

function ProjectsArchivePage(props) {


    return (
        <>
            {!props?.projects && <ContentLoader/>}
            {props?.projects && <div className="theProjects p-t-150">
                {props?.projects?.map((project) => { 
                    return (
                        <div key={project?.id} className="projectContainer" style={{background: `url(${project?.acf?.featured_image.url})`, }}>
                            <Link href={`/showcase/${project?.acf?.link_title}`}>
                                <div className="projectContainerCover"></div>
                                <div className="projectContainerContent">
                                <h3>{project?.acf?.project_name}</h3>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>}
        </>
  )
}

export default ProjectsArchivePage
