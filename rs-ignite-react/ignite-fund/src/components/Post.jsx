import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content}) {
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);

    const [comments, setComments] = useState(['Post bacana!']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(e) {
        e.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChage(e) {
        e.target.setCustomValidity('');
        setNewCommentText(e.target.value);
    };

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity('Esse campo é obrigatório!');
    };

    function deletComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        
        setComments(commentsWithoutDeleteOne);
    };

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph') 
                        return <p key={line.content}>{line.content}</p>; 
                    else if(line.type == 'link')
                        return <p key={line.content}><a href='#'>{line.content}</a></p>;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    name='comment' 
                    value={newCommentText}
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentChage}
                    onInvalid={handleNewCommentInvalid}
                    required    
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {return <Comment key={comment} content={comment} onDeletComment={deletComment} />})}
            </div>
        </article>
    )
}