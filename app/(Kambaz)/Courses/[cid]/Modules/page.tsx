"use client";
import * as client from "../../client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Lesson, Module } from "../../../../types";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModuleControls";
import { editModule, setModules, updateModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector(
    (state: { modulesReducer: { modules: Module[] } }) => state.modulesReducer
  );
  const dispatch = useDispatch();

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const newModule2 = await client.createModuleForCourse(
      cid as string,
      newModule
    );
    dispatch(setModules([...modules, newModule2]));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m
    );
    dispatch(setModules(newModules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: Module, index) => (
          <ListGroupItem
            key={`${module._id}-${module.name}`}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={onRemoveModule}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: Lesson) => (
                  <ListGroupItem
                    key={`${index}-${lesson._id}`}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
