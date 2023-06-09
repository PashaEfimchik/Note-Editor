import {useLocalStorage} from "./useLocalStorage";
import CreatableReactSelect from "react-select/creatable";
import {INote} from "./Note.type";
import {useEffect} from "react";
import '../styles/TagSelector.scss'

type TagSelectorProps = {
    notes: INote[];
    onAddTag: (tag: string) => void;
    tagNoteList: string[];
    setEditNote: (bool: boolean) => void;
}

export function TagSelector(props: TagSelectorProps) {
    let { notes, onAddTag, tagNoteList, setEditNote } = props;
    const [tags, setTags] = useLocalStorage<string[]>("TAGS", []);

    const tagList = tags.filter(tag => tag !== "");

    useEffect(() => {
        setTags(() => Array.from(new Set(notes.map(note => note.tag.split(" ")).flat())));
        tagNoteList.map(tag => ({value: tag, label: tag}));
    }, [notes]);

    return (
        <div className="TagSelector">
            <label htmlFor="creatableSelector">Tag Selector</label>
            <div className="creatableSelector" id="creatableSelector">
                <CreatableReactSelect
                    isMulti
                    isClearable
                    onChange={(e) => onAddTag(e.map((tag: any) => tag.value).join(" "))}
                    options={
                        tagList.map(tag => ({value: tag, label: tag}))
                    }
                    placeholder={"Add #tags"}
                    defaultValue={tagNoteList.map(tag => ({value: tag, label: tag}))}
                />
            </div>
        </div>
    );
}