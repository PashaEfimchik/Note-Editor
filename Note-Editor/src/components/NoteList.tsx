import {INote} from "./Note.type";
import '../styles/NoteList.scss'

type NoteListProps = {
    notes: INote[]
    onDeleteClick: (data: INote) => void
    onEditClick: (data: INote) => void
}

export function NoteList (props: NoteListProps) {
    const { notes, onDeleteClick, onEditClick } = props;
    return (
        <div className="NoteListForm">
            <table className="tableNoteList">
                    {notes.length > 0 && <caption>Note List</caption>}
                    {notes.length === 0 && <caption>No Notes yet</caption>}
                <tbody>
                    {notes.map(note => (
                        <tr className="noteId" key={note.id}>
                            <td className="noteTrContent">
                                <div className="noteTitle">{note.title}</div>
                                <div className="noteContent">
                                    <span>
                                        {note.content}
                                    </span>
                                </div>
                                <div className="noteTag">
                                    <div className="divNoteTag" >
                                        {note.tag}
                                    </div>
                                </div>
                            </td>
                            <td className="noteTrBtn">
                                <div className="noteListButton">
                                    <button className="deleteButton" onClick={() => onDeleteClick(note)}>Delete</button>
                                    <button className="editButton" onClick={() => onEditClick(note)}>Edit</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}